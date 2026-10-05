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

      {/* Mobile: crop of the scene on top, red panel below */}
      <div className="relative aspect-[1100/865] max-h-[420px] w-full lg:hidden">
        <Image
          src="/hero/why.webp"
          alt="Man standing before a Mekark billboard on a high-rise construction site"
          fill
          quality={65}
          sizes="(min-width: 640px) 150vw, 220vw"
          className="object-cover object-left"
        />
      </div>

      <div className="why-panel px-5 py-10 sm:px-10 lg:absolute lg:right-0 lg:top-0 lg:p-0">
        <div className="why-head">
          <h2 className="text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[#030303]">
            Why Top Industries <br className="hidden sm:block" />
            Choose Mekark
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 lg:text-[#424242]">
            The reasons a Plant Director signs off on a contractor are rarely the reasons in the brochure. Here&apos;s what actually moves the decision at the CFO&apos;s desk.
          </p>
        </div>

        <ul className="why-list mt-8 flex flex-col gap-1">
          {POINTS.map((p) => (
            <li
              key={p.text}
              style={{ "--x": p.x, "--w": p.w } as React.CSSProperties}
              className="why-row flex items-center gap-4 border-b border-[#e2e2e2] py-3 text-xl font-extrabold text-white sm:text-2xl"
            >
              <svg className="why-tick size-7 shrink-0 sm:size-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
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
