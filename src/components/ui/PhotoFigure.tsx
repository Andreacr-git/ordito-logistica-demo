import Image from "next/image";
import type { Photo } from "@/content/photos";
import { cx } from "@/lib/cx";
import { ExternalLink } from "./ExternalLink";

type PhotoFigureProps = {
  photo: Photo;
  /** Attributo sizes di next/image: indica al browser quale larghezza scaricare. */
  sizes: string;
  /** Classi di proporzione del riquadro (es. "aspect-[4/5]"). */
  aspectClassName: string;
  caption?: string;
  className?: string;
};

/** Fotografia con didascalia e credito all'autore, come nelle pubblicazioni editoriali. */
export function PhotoFigure({ photo, sizes, aspectClassName, caption, className }: PhotoFigureProps) {
  return (
    <figure className={className}>
      <div className={cx("photo", aspectClassName)}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} quality={70} className="photo__img" />
      </div>
      <figcaption className="t-caption mt-3">
        {caption ? <span className="text-notte">{caption}. </span> : null}
        Foto di <ExternalLink href={photo.authorUrl}>{photo.author}</ExternalLink> su{" "}
        <ExternalLink href={photo.pageUrl}>Unsplash</ExternalLink>.
      </figcaption>
    </figure>
  );
}
