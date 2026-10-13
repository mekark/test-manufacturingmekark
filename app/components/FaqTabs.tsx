"use client";

import { useState, type ReactNode } from "react";

const ico = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type Tab = { id: string; label: string; icon: ReactNode; start: number; faqs: { q: string; a: string }[] };

// Questions are numbered continuously across tabs; `start` is the number of each tab's first question.
const TABS: Tab[] = [
  {
    id: "construction",
    label: "Construction & Design",
    start: 1,
    icon: (
      <svg {...ico}>
        <path d="M12 16h.01M16 16h.01M8 16h.01" />
        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422L15 10.5V8.5a.5.5 0 0 0-.769-.422L9 11.5V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
      </svg>
    ),
    faqs: [
      {
        q: "How is a manufacturing plant different from a standard industrial shed?",
        a: "A manufacturing facility is based on production, not on coverage alone. It should be able to withstand the weight of machinery, have an overhead crane, withstand vibrations, and have a clear flow of raw materials, work-in-progress, and finished products. A regular shed does not have to satisfy these criteria.",
      },
      {
        q: "What should be planned first in manufacturing facility construction?",
        a: "Begin with your flow chart, list of machinery, and production capacity. In building your manufacturing facility, we plan bay width, clear height, lifting capacities, utilities, and floor loading during design so that the building accommodates your machinery, not vice versa.",
      },
      {
        q: "Will Mekark build for different manufacturing industries?",
        a: "Yes. As a manufacturing plant construction company, we build for engineering and fabrication, automotive and auto components, FMCG and food processing, pharmaceuticals, textiles, electronics, and chemical units, with structures sized to each industry's process needs.",
      },
      {
        q: "What are the advantages of choosing PEB as your manufacturing unit construction?",
        a: "Since PEB (pre-engineered building) structures are fabricated in a factory and assembled on site, which shortens the construction time. They also provide clear-span interiors with fewer columns, making machinery layout and future line changes easier. This is why PEB is widely used for manufacturing unit construction.",
      },
    ],
  },
  {
    id: "turnkey",
    label: "Turnkey & EPC Delivery",
    start: 5,
    icon: (
      <svg {...ico}>
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </svg>
    ),
    faqs: [
      {
        q: "What does turnkey manufacturing plant construction include?",
        a: "Turnkey manufacturing plant construction covers site study, design, structural engineering, fabrication, civil work, erection, quality checks and handover under one contract. You deal with one accountable team instead of managing several contractors.",
      },
      {
        q: "What should I look for in a manufacturing plant EPC contractor?",
        a: "Check for single-point accountability, in-house engineering and fabrication, and a proven track record. As a manufacturing plant EPC contractor, Mekark offers all three, backed by 300+ completed industrial and commercial projects.",
      },
      {
        q: "How do I choose between a manufacturing plant contractor and an EPC contractor?",
        a: "A manufacturing plant contractor usually builds to a design you provide, while an EPC contractor handles engineering, procurement and construction together. If you want one team responsible for cost, schedule and quality, EPC is the safer route. We work both ways, depending on your project.",
      },
    ],
  },
  {
    id: "safety",
    label: "Safety & Future Expansion",
    start: 8,
    icon: (
      <svg {...ico}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    faqs: [
      {
        q: "Which approvals are needed to build a manufacturing plant in India?",
        a: "This depends upon the state, location, and type of the business, but may include land use/ development and construction approval, factory license, fire safety NOC, and pollution control board approval. While conducting feasibility studies, we will support you in identifying the necessary clearances for your project.",
      },
      {
        q: "How do you plan for fire safety and worker safety in a manufacturing building?",
        a: "We plan for our exit points, fire ratings, hydrants and sprinklers, ventilation, and the path to move material safely. This is done during the design phase, but we also ensure there is routine safety assessment conducted at our work site.",
      },
      {
        q: "Can the manufacturing plant be expanded later?",
        a: "Yes. With PEB, additional bays can be added to an existing building. We plan the foundation, column positions and utility capacity for expansion during the first design, so that you can increase capacity without major rework or long shutdowns.",
      },
    ],
  },
];

export default function FaqTabs({ media }: { media?: ReactNode }) {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const active = TABS[tab];

  return (
    <>
      <div role="tablist" aria-label="FAQ categories" className="grid max-w-[320px] grid-cols-2 gap-y-2.5 sm:flex sm:max-w-none sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
        {TABS.map((t, i) => {
          const on = i === tab;
          return (
            <button
              key={t.id}
              role="tab"
              id={`faq-tab-${t.id}`}
              aria-selected={on}
              aria-controls="faq-panel"
              onClick={() => {
                setTab(i);
                setOpen(0);
              }}
              className={`flex shrink-0 items-center gap-2 justify-self-start self-start whitespace-nowrap rounded-full px-2.5 py-[9px] text-left text-[10px] leading-normal sm:whitespace-normal sm:px-[18px] sm:py-[15px] sm:text-sm sm:leading-[19px] ${
                on ? "bg-[#c4161c] font-bold text-[#f5f5f5]" : "bg-[#ebebeb] font-medium text-[#929292] sm:text-[#6b6b6b] lg:text-[#929292]"
              }`}
            >
              <span className="shrink-0 [&_svg]:size-3.5 sm:[&_svg]:size-6">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      {media && <div className="mt-5 lg:hidden">{media}</div>}

      <div id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${active.id}`} className="mt-6 lg:mt-6 lg:max-w-[949px]">
        {active.faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-[#e2e2e2] pb-3 pt-3 first:pt-0 sm:border-b-[1.333px] sm:pb-[33px] sm:pt-8 lg:pb-[25.333px] lg:pt-6 lg:first:pt-6">
              <h3>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-4 text-left text-base font-medium leading-normal sm:items-start sm:gap-6 sm:text-[21.333px] sm:font-bold sm:leading-[29.867px] lg:text-[21px] ${
                    isOpen ? "text-[#c4161c] lg:font-bold" : "text-[#101116] sm:text-[#080808] lg:font-semibold"
                  }`}
                >
                  <span className="flex">
                    <span aria-hidden="true" className="w-6 shrink-0 lg:w-[31.5px]">{active.start + i}.</span>
                    <span>{f.q}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[21.333px] font-normal leading-none transition-transform sm:size-[37.333px] duration-200 ${
                      isOpen ? "rotate-45 bg-[#c4161c] text-[#f5f5f5]" : "bg-[#f0f0f0] text-[#9a9a9a] sm:text-[#767676] lg:text-[#9a9a9a]"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pl-[23px] pt-2.5 text-sm font-normal leading-normal text-[#4b4d53] sm:pl-0 sm:pt-[18.667px] sm:font-medium sm:text-[#5a5a5a] sm:text-[18.667px] sm:leading-[30.8px] lg:max-w-[817px] lg:pl-[34px] lg:pt-1.5 lg:text-[18px] lg:leading-7">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
