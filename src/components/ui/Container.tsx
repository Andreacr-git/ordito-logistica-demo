import type { ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Contenitore centrato con margini laterali fluidi, condiviso da tutte le sezioni. */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={cx("container-x", className)}>{children}</Tag>;
}
