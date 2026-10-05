import Image from "next/image";
import FaqTabs from "./FaqTabs";

const image = (sizes: string) => (
  <Image
    src="/hero/faq.webp"
    alt="Illustration of a multi-storey factory with smokestacks"
    fill
    quality={70}
    sizes={sizes}
    className="object-cover object-top"
  />
);

export default function Faq() {
  return (
    <section className="overflow-x-clip bg-[#f9f6f7] lg:bg-white">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 md:py-16 xl:p-20">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,0.87fr)_minmax(0,1fr)] lg:gap-8 min-[1720px]:grid-cols-[805px_925px]">
          <div className="relative mx-auto hidden aspect-[805/779] w-full lg:block">
            {image("(min-width: 1720px) 805px, 44vw")}
          </div>

          <div>
            <div className="flex items-center gap-[10.667px]">
              <span aria-hidden="true" className="h-[2.667px] w-[26.667px] bg-[#c4161c]" />
              <p className="text-[14.667px] font-extrabold uppercase tracking-[2.667px] text-[#c4161c]">FAQ</p>
            </div>
            <h2 className="mb-3 mt-3 text-[28px] font-bold leading-8 text-[#070506] sm:mb-6 sm:mt-1.5 sm:text-[40px] sm:leading-[1.2] xl:text-[46px] xl:leading-[normal]">
              Frequently Asked Questions.
            </h2>
            <FaqTabs
              media={
                <div className="relative mx-auto aspect-[278/269] w-full max-w-[560px]">{image("(min-width: 640px) 560px, 90vw")}</div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
