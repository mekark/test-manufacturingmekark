import Image from "next/image";
import FaqTabs from "./FaqTabs";

export default function Faq() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1920px] px-5 py-12 md:px-10 md:py-16 xl:p-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.87fr)_minmax(0,1fr)] lg:gap-8 min-[1720px]:grid-cols-[805px_925px]">
          <div className="relative mx-auto aspect-[805/779] w-full max-w-[560px] lg:max-w-none">
            <Image
              src="/hero/faq.webp"
              alt="Illustration of a multi-storey factory with smokestacks"
              fill
              quality={70}
              sizes="(min-width: 1720px) 805px, (min-width: 1024px) 44vw, 90vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <div className="flex items-center gap-[10.667px]">
              <span aria-hidden="true" className="h-[2.667px] w-[26.667px] bg-[#c4161c]" />
              <p className="text-[14.667px] font-extrabold uppercase tracking-[2.667px] text-[#c4161c]">FAQ</p>
            </div>
            <h2 className="mb-6 mt-1.5 text-[30px] font-bold leading-[1.2] text-[#070506] sm:text-[40px] xl:text-[46px] xl:leading-[normal]">
              Frequently Asked Questions.
            </h2>
            <FaqTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
