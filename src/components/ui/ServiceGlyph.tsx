import type { ServiceGlyph as GlyphName } from "@/content/services";

type ServiceGlyphProps = {
  name: GlyphName;
  className?: string;
};

/**
 * Piccoli schemi che descrivono la forma di ogni servizio:
 * una tratta da A a B, un magazzino attraversato dal flusso,
 * una distribuzione da uno a molti, un intreccio su misura.
 */
export function ServiceGlyph({ name, className }: ServiceGlyphProps) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true" focusable="false" fill="none">
      {name === "route" ? (
        <>
          <path d="M18 4v48M38 4v48" stroke="currentColor" strokeOpacity=".22" />
          <path d="M9 40h19V16h19" stroke="var(--color-segnale)" strokeWidth="2" />
          <rect x="4" y="36" width="8" height="8" fill="currentColor" />
          <rect x="44" y="12" width="8" height="8" fill="currentColor" />
        </>
      ) : null}
      {name === "warehouse" ? (
        <>
          {[10, 24, 38].map((x) =>
            [8, 22, 36].map((y) => (
              <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
            )),
          )}
          <path d="M2 26h52" stroke="var(--color-segnale)" strokeWidth="2" />
        </>
      ) : null}
      {name === "branch" ? (
        <>
          <path d="M10 28h18M28 12v32M28 12h16M28 28h16M28 44h16" stroke="var(--color-segnale)" strokeWidth="2" />
          <rect x="4" y="24" width="8" height="8" fill="currentColor" />
          <rect x="44" y="8" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="44" y="24" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="44" y="40" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        </>
      ) : null}
      {name === "weave" ? (
        <>
          <path
            d="M14 4v12.5M14 23.5v28.5M28 4v48M42 4v12.5M42 23.5v28.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M2 34h52" stroke="currentColor" strokeOpacity=".22" />
          <path d="M2 20h22M32 20h22" stroke="var(--color-segnale)" strokeWidth="2.5" />
        </>
      ) : null}
    </svg>
  );
}
