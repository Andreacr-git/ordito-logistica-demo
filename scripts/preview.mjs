/**
 * Anteprima locale dell'export statico (cartella `out/`), senza dipendenze esterne.
 *
 * Applica le stesse intestazioni HTTP definite in netlify.toml (CSP compresa),
 * così si possono verificare in locale prima del deploy.
 *
 * Uso: npm run build && npm run preview   →   http://localhost:4173
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT) || 4173;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

/** Legge le regole [[headers]] da netlify.toml (sottoinsieme TOML usato in questo progetto). */
async function loadHeaderRules() {
  const toml = await readFile("netlify.toml", "utf8");
  const rules = [];
  let current = null;

  for (const rawLine of toml.split("\n")) {
    const line = rawLine.trim();
    if (line.startsWith("#") || line === "") continue;
    if (line === "[[headers]]") {
      current = { pattern: "", values: {} };
      rules.push(current);
      continue;
    }
    if (line.startsWith("[") && line !== "[headers.values]") {
      current = null;
      continue;
    }
    if (!current) continue;
    const match = line.match(/^([A-Za-z-]+)\s*=\s*"(.*)"$/);
    if (!match) continue;
    const [, key, value] = match;
    if (key === "for") current.pattern = value;
    else current.values[key] = value;
  }
  return rules;
}

function matches(pattern, pathname) {
  if (pattern.endsWith("/*")) return pathname.startsWith(pattern.slice(0, -1));
  return pattern === pathname;
}

async function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname);
  const candidate = normalize(join(root, decoded));
  if (candidate !== root && !candidate.startsWith(root + sep)) return null;

  const options = decoded.endsWith("/")
    ? [join(candidate, "index.html")]
    : [candidate, `${candidate}.html`, join(candidate, "index.html")];

  for (const file of options) {
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {
      // prova il candidato successivo
    }
  }
  return null;
}

const rules = await loadHeaderRules();

createServer(async (request, response) => {
  const { pathname } = new URL(request.url ?? "/", "http://localhost");
  const headers = {};
  for (const rule of rules) {
    if (matches(rule.pattern, pathname)) Object.assign(headers, rule.values);
  }

  let file = await resolveFile(pathname);
  let status = 200;
  if (!file) {
    file = join(root, "404.html");
    status = 404;
  }

  try {
    const body = await readFile(file);
    headers["Content-Type"] = contentTypes[extname(file)] ?? "application/octet-stream";
    response.writeHead(status, headers);
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Cartella out/ non trovata: eseguire prima npm run build.");
  }
}).listen(port, () => {
  console.log(`Anteprima disponibile su http://localhost:${port}`);
});
