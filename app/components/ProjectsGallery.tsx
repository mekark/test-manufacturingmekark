import Image from "next/image";

// The six Figma photos, one grid for every breakpoint. `round` is the desktop-only outer-corner rounding.
const DESKTOP = [
  { src: "/hero/gd1.webp", alt: "Modern industrial building with a louvred facade and loading yard", round: "lg:rounded-tl-[32px]" },
  { src: "/hero/gd2.webp", alt: "Large white warehouse with loading docks", round: "lg:rounded-tr-[32px]" },
  { src: "/hero/gd3.webp", alt: "Solo Paints industrial warehouse with a glazed entrance", round: "lg:rounded-bl-[32px]" },
  { src: "/hero/gd4.webp", alt: "Blue steel warehouse on an industrial estate", round: "lg:rounded-br-[32px]" },
  { src: "/hero/gd5-green.webp", alt: "Aerial view of a green and cream PEB factory with loading docks and a truck", round: "lg:rounded-bl-[32px]" },
  { src: "/hero/gd6-new.webp", alt: "Blue and white steel warehouse with loading docks, a delivery truck and a landscaped car park", round: "lg:rounded-br-[32px]" },
];

export default function ProjectsGallery() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 xl:px-20 xl:py-[52px]">
        <div className="flex flex-col gap-6 sm:gap-[14px] lg:gap-0">
          <div className="flex flex-col gap-4 sm:gap-[14px]">
            <div className="flex flex-col gap-2.5 font-bold sm:gap-[13px]">
              <p className="text-xs uppercase leading-[18px] tracking-[1.6px] text-[#ed1d23] sm:text-base sm:leading-[21.3px]">our work</p>
              <h2 className="text-[28px] leading-8 text-[#0f172a] sm:text-[52px] sm:leading-[1.05] xl:text-[66px] xl:leading-[60px]">
                Projects <span className="text-[#ed1d23]">Gallery</span>
              </h2>
            </div>
          </div>

          {/* One grid: 1 column (180px tiles) on phones, 2 columns from sm, Figma 867:488 tiles at lg */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 lg:mt-[52px] lg:gap-[25px]">
            {DESKTOP.map((t) => (
              <div key={t.src} className={`relative h-[180px] overflow-hidden bg-[#d9d9d9] sm:aspect-[4/3] sm:h-auto lg:aspect-[867/488] ${t.round}`}>
                <Image src={t.src} alt={t.alt} fill sizes="(min-width: 1920px) 868px, (min-width: 1024px) 48vw, (min-width: 640px) 50vw, 100vw" quality={75} className={`object-cover ${"zoom" in t ? t.zoom : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
