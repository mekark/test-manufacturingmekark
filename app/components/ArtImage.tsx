import { getImageProps } from "next/image";

type Source = {
  src: string;
  width: number;
  height: number;
  sizes: string;
  quality?: number;
  /** Media query under which this source is used, e.g. "(max-width: 1023px)". */
  media: string;
};

// 1x1 transparent GIF: lets a <picture> source switch an image off (no network request) at a breakpoint.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type Fallback = Omit<Source, "media">;

/**
 * One <picture> with per-breakpoint sources, so a differently cropped image never
 * needs a second hidden DOM block (and the hidden one is never downloaded).
 */
export default function ArtImage({
  alt = "",
  sources,
  fallback,
  className,
  priority,
  hideAt,
}: {
  alt?: string;
  sources: Source[];
  fallback: Fallback;
  className?: string;
  priority?: boolean;
  /** Media query at which the image is not needed; the browser then fetches nothing. */
  hideAt?: string;
}) {
  const { props } = getImageProps({ ...fallback, alt, className, priority });

  return (
    <picture>
      {hideAt && <source media={hideAt} srcSet={BLANK} />}
      {sources.map((s) => {
        const { media, ...rest } = s;
        const { props: p } = getImageProps({ ...rest, alt });
        return <source key={media} media={media} srcSet={p.srcSet} sizes={p.sizes} />;
      })}
      
      <img {...props} />
    </picture>
  );
}
