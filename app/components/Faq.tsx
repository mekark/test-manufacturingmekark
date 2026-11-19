import Image from "next/image";
import FaqTabs from "./FaqTabs";

export default function Faq() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 md:py-16 xl:px-20 xl:py-[63px]">
        {/*
          One DOM for every breakpoint. At lg: left column (heading + illustration), right column (tabs + answers).
          Below lg both wrappers dissolve (`contents`) and `order` stacks: heading, tabs, illustration, answers.
        */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:items-start">
          <div className="max-lg:contents lg:flex lg:w-[39.3%] lg:shrink-0 lg:flex-col lg:items-center xl:sticky xl:top-24 xl:self-start">
            <div className="flex w-full flex-col items-start gap-3 py-1.5 lg:gap-[25.467px] lg:py-0">
              <span className="rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18.67px] py-2 text-sm font-semibold leading-[10px] text-[#cc000a] lg:border-[1.333px] lg:px-5 lg:py-[9.333px] lg:text-base lg:leading-[26px]">
                FAQ
              </span>
              <h2 className="text-[28px] font-bold leading-8 text-[#070506] sm:text-[40px] sm:leading-[1.2] lg:text-[clamp(40px,3.4375vw,66px)] lg:leading-[1.2121]">
                Frequently Asked <br className="max-lg:hidden" />
                <span className="lg:text-[#cc000a]">
                  Questions<span className="max-sm:hidden">.</span>
                </span>
              </h2>
            </div>
            <div className="relative mx-auto mt-5 aspect-[3/2] w-full max-w-[560px] max-lg:order-2 lg:mt-0 lg:max-w-[684px]">
              <Image
                src="/hero/faq-d.webp"
                alt="Illustration of a modern red and white manufacturing facility"
                fill
                quality={75}
                sizes="(min-width: 1920px) 684px, (min-width: 1024px) 38vw, (min-width: 640px) 560px, 90vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="max-lg:contents lg:w-[55.5%]">
            <FaqTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
