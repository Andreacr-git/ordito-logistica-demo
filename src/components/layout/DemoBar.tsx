import Link from "next/link";
import { Container } from "@/components/ui/Container";

/** Avviso permanente in cima a ogni pagina: il sito è un concept, l'azienda non esiste. */
export function DemoBar() {
  return (
    <div id="top" className="demo-bar on-dark">
      <Container className="demo-bar__inner">
        <p>
          <span className="demo-bar__tag">Concept</span>
          <span className="demo-bar__long">Ordito è un’azienda immaginaria: questo sito è un progetto dimostrativo.</span>
          <span className="demo-bar__short">Azienda immaginaria.</span>
        </p>
        <Link href="/note-legali/" className="demo-bar__link">
          Dettagli
        </Link>
      </Container>
    </div>
  );
}
