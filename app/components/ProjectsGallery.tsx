import Image from "next/image";

type Tile = { src: string; alt: string; w: number; h: number; sizes: string };

const T = {
  farm: { src: "/hero/g1.webp", w: 854, h: 965, alt: "Aerial view of a completed teal and white factory building", sizes: "(min-width: 1024px) 30vw, 100vw" },
  campus: { src: "/hero/g2.webp", w: 587, h: 315, alt: "Completed white industrial building with landscaped grounds", sizes: "(min-width: 1024px) 30vw, 50vw" },
  roof: { src: "/hero/g3.webp", w: 587, h: 660, alt: "Aerial view of a factory roof under construction", sizes: "(min-width: 1024px) 22vw, 50vw" },
  interior: { src: "/hero/g4.webp", w: 1079, h: 716, alt: "Interior of a large steel-frame manufacturing shed", sizes: "(min-width: 1024px) 38vw, 50vw" },
  frame: { src: "/hero/g5.webp", w: 857, h: 707, alt: "Aerial view of a steel structure frame being erected", sizes: "(min-width: 1024px) 30vw, 50vw" },
  yard: { src: "/hero/g6.webp", w: 857, h: 707, alt: "Industrial shed with equipment on site", sizes: "(min-width: 1024px) 30vw, 50vw" },
} satisfies Record<string, Tile>;

function Photo({ tile, className }: { tile: Tile; className: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#d9d9d9] ${className}`}>
      <Image src={tile.src} alt={tile.alt} fill sizes={tile.sizes} quality={70} className="object-cover" />
    </div>
  );
}

// Below lg the wrappers use `contents`, so the six photos flow in a simple 2-column grid.
export default function ProjectsGallery() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-12 md:px-10 xl:px-20 xl:py-[70px]">
        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[13px] font-bold">
            <p className="text-base uppercase leading-[21.3px] tracking-[1.6px] text-[#ed1d23]">our work</p>
            <h2 className="text-[40px] leading-[1.05] text-[#0f172a] sm:text-[52px] xl:text-[66px] xl:leading-[60px]">
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
          <p className="text-base font-medium leading-7 text-[#64748b] md:text-[20px] xl:text-[24px] xl:leading-9">
            Completed Manufacturing structures across Tamil Nadu and beyond.
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-2 gap-3 lg:grid-cols-[569fr_1167fr] lg:gap-6">
          <div className="contents lg:flex lg:flex-col lg:gap-5">
            <Photo tile={T.farm} className="col-span-2 aspect-[4/3] lg:aspect-auto lg:flex-[643]" />
            <Photo tile={T.campus} className="aspect-[4/3] lg:aspect-auto lg:flex-[305]" />
          </div>
          <div className="contents lg:flex lg:flex-col lg:gap-5">
            <div className="contents lg:grid lg:aspect-[1167/477] lg:grid-cols-[424fr_719fr] lg:gap-6">
              <Photo tile={T.roof} className="aspect-[4/3] lg:aspect-auto" />
              <Photo tile={T.interior} className="aspect-[4/3] lg:aspect-auto" />
            </div>
            <div className="contents lg:grid lg:aspect-[1167/471] lg:grid-cols-2 lg:gap-6">
              <Photo tile={T.frame} className="aspect-[4/3] lg:aspect-auto" />
              <Photo tile={T.yard} className="aspect-[4/3] lg:aspect-auto" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center xl:mt-[70px]">
          <a
            href="#"
            className="rounded-[8.8px] bg-[#c4161c] px-10 py-4 text-xl font-extrabold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] xl:px-[50px] xl:py-5 xl:text-[24px]"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}
