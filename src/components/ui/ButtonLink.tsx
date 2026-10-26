import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type ButtonVariant = "primary" | "outline-light" | "outline-dark" | "dark";

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  /** Link esterno: si apre in una nuova scheda, segnalandolo agli screen reader. */
  external?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Collegamento con aspetto di pulsante. Il sito non ha azioni che inviano dati:
 * ogni "pulsante" è un vero link verso un'ancora, una pagina o un sito esterno.
 */
export function ButtonLink({ href, variant = "primary", external = false, className, children }: ButtonLinkProps) {
  const classes = cx("btn", `btn--${variant}`, className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
    );
  }

  // Pagine interne: navigazione client di Next.js. Ancore: link nativo.
  if (href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
