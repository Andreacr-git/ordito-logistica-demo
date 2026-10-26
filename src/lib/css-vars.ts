import type { CSSProperties } from "react";

/** Permette di passare custom properties CSS (es. `--i`) nell'attributo style. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars as CSSProperties;
}
