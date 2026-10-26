import Link from "next/link";
import { cx } from "@/lib/cx";

/**
 * Marchio di Ordito: quattro fili d'ordito verticali attraversati da una trama arancione
 * che passa alternativamente sopra e sotto, come in un tessuto.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path
        d="M7 5v7.75M7 19.25V27M13 5v22M19 5v7.75M19 19.25V27M25 5v22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M1 16h9M16 16h6M28 16h3" fill="none" stroke="var(--color-segnale)" strokeWidth="2.5" />
    </svg>
  );
}

type LogoProps = {
  /** Se presente, il logo diventa un link (di norma alla home). */
  href?: string;
  className?: string;
};

export function Logo({ href, className }: LogoProps) {
  const content = (
    <>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="logo__word">Ordito</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cx("logo", className)} aria-label="Ordito, torna alla home">
        {content}
      </Link>
    );
  }

  return <span className={cx("logo", className)}>{content}</span>;
}
