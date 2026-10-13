"use client";

import { useState } from "react";
import Image from "next/image";

// Mobile / tablet accordion (copy differs slightly from desktop in the Figma frames).
const MOBILE_REASONS = [
  { title: "Turnkey Manufacturing Plant Construction", text: "One team takes accountability from design to handover. Engineered, procured and constructed all under one roof, so your manufacturing plant, production unit or processing facility stays on schedule and within budget. As a manufacturing plant EPC contractor, we remove the need to coordinate multiple vendors." },
  { title: "In-House Structural Engineering", text: "As a manufacturing plant contractor, our engineers run BIM-based structural analysis for every structure before work begins. That makes us a dependable manufacturing building contractor for large-scale manufacturing facility construction, with fewer on-site design changes" },
  { title: "Foundations Built for Your Machinery", text: "We design foundations around your heavy machinery, press and CNC loads, overhead cranes, vibration limits and floor loads. As a manufacturing unit construction company, we size footings, pedestals and machine plinths for safe load transfer and stable equipment alignment." },
  { title: "Proven Track Record", text: "We have completed 200+ industrial and commercial construction projects with a high customer rating. Repeat orders from manufacturers, industrial groups and MSME units, across manufacturing unit construction and turnkey manufacturing plant construction, show our reliability." },
  { title: "Fully Automated Steel Production", text: "The latest automation ensures consistency and reduces human error. Our automated manufacturing process will cut, weld, and finish all members of your structure to the same specifications, ensuring consistent quality for each component." },
  { title: "Inspection Before Handover", text: "ISO 9001:2015 and CE-certified processes support fabrication quality with documentation your project and compliance teams can verify." },
];

// Desktop accordion: x / w are the staggered left offset and row width in Figma px.
const REASONS = [
  { title: "Turnkey Manufacturing Plant Construction", x: 0, w: 700, text: "One team takes accountability from design to handover. Engineered, procured and constructed all under one roof, so your manufacturing plant, production unit or processing facility stays on schedule and within budget. As a manufacturing plant EPC contractor, we remove the need to coordinate multiple vendors." },
  { title: "In-House Structural Engineering", x: 28, w: 672, text: "As a manufacturing plant contractor, our engineers run BIM-based structural analysis for every structure before work begins. That makes us a dependable manufacturing building contractor for large-scale manufacturing facility construction, with fewer on-site design changes" },
  { title: "Foundations Built for Your Machinery", x: 55, w: 645, text: "We design foundations around your heavy machinery, press and CNC loads, overhead cranes, vibration limits and floor loads. As a manufacturing unit construction company, we size footings, pedestals and machine plinths for safe load transfer and stable equipment alignment." },
  { title: "Proven Track Record", x: 55, w: 645, text: "We have completed 200+ industrial and commercial construction projects with a high customer rating. Repeat orders from manufacturers, industrial groups and MSME units, across manufacturing unit construction and turnkey manufacturing plant construction, show our reliability." },
  { title: "Safety & Cost Clarity", x: 28, w: 672, text: "Modular formwork, routine site safety checks and clear, itemised pricing keep our manufacturing plant construction sites safe, organised and free of cost surprises." },
  { title: "Inspection Before Handover", x: 0, w: 700, text: "We inspect the structure, construction quality and statutory compliance before handover. For manufacturing plants with clean rooms, process utilities or temperature-controlled zones, we also check the building before machinery installation and utility fit-out begins." },
];

export default function WhyMekark() {
  const [open, setOpen] = useState<number | null>(null);
  const [mOpen, setMOpen] = useState<number | null>(null);

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
          <h2 className="why-title text-[28px] font-bold leading-[34px] text-[#030303] sm:text-[44px] sm:leading-[1.1] sm:text-white lg:text-[#030303]">
            Why Top Industries <br />
            Choose Mekark
          </h2>
          <p className="why-sub mt-3 text-xs leading-[19px] text-[#424242] sm:mt-4 sm:text-base sm:leading-7 sm:text-white/90 lg:text-[#424242]">
            India&apos;s Leading Manufacturing Plant Construction Company
          </p>
        </div>

        <ul className="mt-[15px] sm:mt-8 lg:hidden">
          {MOBILE_REASONS.map((r, i) => (
            <li key={r.title} className="border-b border-[#e58282] py-2.5 first:pt-0 last:border-b-0 last:pb-0 sm:border-[#e2e2e2]">
              <button
                type="button"
                id={`why-m-btn-${i}`}
                aria-expanded={mOpen === i}
                aria-controls={`why-m-panel-${i}`}
                onClick={() => setMOpen(mOpen === i ? null : i)}
                className="flex min-h-9 w-full items-center justify-between gap-4 text-left text-base font-bold leading-[18px] text-white"
              >
                <span className="flex">
                  <span aria-hidden="true" className="w-6 shrink-0">{i + 1}.</span>
                  <span>{r.title}</span>
                </span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 30 30"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-300 ${mOpen === i ? "rotate-180" : ""}`}
                >
                  <path d="M8 12l7 7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${mOpen === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p id={`why-m-panel-${i}`} role="region" aria-labelledby={`why-m-btn-${i}`} className="pl-6 pt-1.5 text-sm font-medium leading-[19px] text-white">
                    {r.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="why-acc hidden lg:block">
          {REASONS.map((r, i) => (
            <li key={r.title} data-open={open === i} style={{ "--x": r.x, "--w": r.w } as React.CSSProperties} className="why-acc-item">
              <button
                type="button"
                id={`why-btn-${i}`}
                aria-expanded={open === i}
                aria-controls={`why-panel-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="why-acc-btn"
              >
                <span className="w-[25px] shrink-0">{i + 1}.</span>
                <span className="flex-1">{r.title}</span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                >
                  <path d="M8 12l7 7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p id={`why-panel-${i}`} role="region" aria-labelledby={`why-btn-${i}`} className="why-acc-desc">
                    {r.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
