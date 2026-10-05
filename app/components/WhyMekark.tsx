import Image from "next/image";

// x / w: left offset and underline width in Figma px (the list is intentionally staggered).
const POINTS = [
  { text: "Avoid Construction Delays", x: 0, w: 580 },
  { text: "Guarantee Structural Quality", x: 20, w: 571 },
  { text: "Reduce Cost Overruns", x: 40, w: 659 },
  { text: "Complete Turnkey Solutions", x: 40, w: 609 },
  { text: "Expert Project Management", x: 20, w: 531 },
  { text: "Compliance & Approvals", x: 0, w: 608 },
];

export default function WhyMekark() {
  return (
    <section className="why relative isolate overflow-hidden bg-[#e60f1a]">
      <Image
        src="/hero/why.webp"
        alt="Man standing before a Mekark billboard on a high-rise construction site"
        fill
        quality={70}
        sizes="(min-width: 1024px) 100vw, 150vw"
        className="-z-10 hidden object-cover lg:block"
      />

      {/* Phone: fixed 249px banner (Figma crop), gradient panel below */}
      <div className="relative h-[249px] overflow-hidden bg-[#f9f6f7] sm:hidden">
        <Image
          src="/hero/m-why.webp"
          alt="Man standing before a Mekark billboard on a high-rise construction site"
          width={617}
          height={278}
          quality={70}
          sizes="617px"
          className="absolute left-0 top-[-13px] h-[278px] w-[max(617px,100%)] max-w-none object-cover"
        />
      </div>

      {/* Tablet: crop of the scene on top, red panel below */}
      <div className="relative hidden aspect-[1100/865] max-h-[420px] w-full sm:block lg:hidden">
        <Image
          src="/hero/why.webp"
          alt="Man standing before a Mekark billboard on a high-rise construction site"
          fill
          quality={65}
          sizes="(min-width: 640px) 150vw, 220vw"
          className="object-cover object-left"
        />
      </div>

      <div className="why-panel bg-gradient-to-b from-[#fffdfd] from-[6%] to-[#e60f1a] to-[47%] px-5 pb-[30px] pt-5 sm:bg-none sm:px-10 sm:py-10 lg:absolute lg:right-0 lg:top-0 lg:p-0">
        <div className="why-head">
          <h2 className="text-[28px] font-bold leading-[34px] text-[#030303] sm:text-[44px] sm:leading-[1.1] sm:text-white lg:text-[#030303]">
            Why Top Industries <br />
            Choose Mekark
          </h2>
          <p className="mt-3 text-xs leading-[19px] text-[#424242] sm:mt-4 sm:text-base sm:leading-7 sm:text-white/90 lg:text-[#424242]">
            The reasons a Plant Director signs off on a contractor are rarely the reasons in the brochure. Here&apos;s what actually moves the decision at the CFO&apos;s desk.
          </p>
        </div>

        <ul className="why-list mt-[10px] flex flex-col gap-px sm:mt-8 sm:gap-1">
          {POINTS.map((p) => (
            <li
              key={p.text}
              style={{ "--x": p.x, "--w": p.w } as React.CSSProperties}
              className="why-row flex items-center gap-[14px] border-b border-[#e58282] pb-[11px] pt-2.5 text-base font-bold leading-[18px] text-white last:border-b-0 sm:gap-4 sm:border-[#e2e2e2] sm:py-3 sm:text-2xl sm:font-extrabold sm:leading-normal sm:last:border-b"
            >
              <svg className="why-tick size-8 shrink-0 sm:size-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <path d="M8 19l7 7 13-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
