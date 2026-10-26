import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type ExternalLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/** Link verso siti esterni, aperto in una nuova scheda con avviso per gli screen reader. */
export function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a href={href} className={cx("link", className)} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (si apre in una nuova scheda)</span>
    </a>
  );
}
