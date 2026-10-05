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

type Tab = { id: string; label: string; icon: ReactNode; faqs: { q: string; a: string }[] };

// Answers for "About Mekark" come from the design; the other tabs have no Figma copy yet, so
// they are drafted from facts already used on the page. Review them before launch.
const TABS: Tab[] = [
  {
    id: "about",
    label: "About Mekark",
    icon: (
      <svg {...ico}>
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
      </svg>
    ),
    faqs: [
      {
        q: "Why choose Mekark for manufacturing building construction?",
        a: "Mekark is a leading manufacturing building contractor offering complete turnkey construction solutions. From design and engineering to fabrication and construction, our in-house team delivers durable, efficient, and high-quality manufacturing facilities.",
      },
      {
        q: "What services does Mekark provide for manufacturing buildings?",
        a: "We cover site and feasibility studies, structural and MEP design, in-house steel fabrication, civil works and erection, and commissioning and handover, all under one project office.",
      },
      {
        q: "Does Mekark provide turnkey manufacturing plant construction?",
        a: "Yes. One contract covers your entire plant, from concept to commissioning, with single-point accountability and no handoffs between agencies.",
      },
      {
        q: "Which industries does Mekark serve?",
        a: "We build for manufacturers across automotive, engineering, electronics, food and beverage, pharma, textiles and warehousing, among others.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    icon: (
      <svg {...ico}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    faqs: [
      {
        q: "Do you handle structural and MEP design in-house?",
        a: "Yes. Structural and MEP design is sized for your process, equipment and future expansion by our own engineering team.",
      },
      {
        q: "Where is the steel fabricated?",
        a: "Steel is cut, welded and coated inside our own 6,00,000 sq.ft facility, which keeps quality and timelines under our control.",
      },
      {
        q: "What checks are done before construction starts?",
        a: "We run soil testing, load-requirement studies and statutory checks before a single drawing is finalised.",
      },
    ],
  },
  {
    id: "building",
    label: "Manufacturing Building Information",
    icon: (
      <svg {...ico}>
        <path d="M12 16h.01M16 16h.01M8 16h.01" />
        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422L15 10.5V8.5a.5.5 0 0 0-.769-.422L9 11.5V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
      </svg>
    ),
    faqs: [
      {
        q: "How long does a manufacturing building take to complete?",
        a: "Request a project blueprint to get a custom layout, cost range and a 150-day* timeline for your plant. Final timelines depend on scope and site conditions.",
      },
      {
        q: "Can the building be expanded later?",
        a: "Yes. Designs are planned around your process and future expansion, so extra bays or floors can be added without rework.",
      },
      {
        q: "Who handles approvals and compliance?",
        a: "We close statutory sign-offs, fire NOC and documentation before you take possession.",
      },
    ],
  },
  {
    id: "advantage",
    label: "Advantage of Choosing Mekark",
    icon: (
      <svg {...ico}>
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>
    ),
    faqs: [
      {
        q: "How does Mekark help avoid delays and cost overruns?",
        a: "Design, fabrication and construction run under one project office, so there are no handoffs between contractors and fewer surprises on cost or schedule.",
      },
      {
        q: "What does single-point accountability mean?",
        a: "One team is responsible from design to delivery, so you deal with one contract and one point of contact for the entire plant.",
      },
    ],
  },
];

export default function FaqTabs() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const active = TABS[tab];

  return (
    <>
      <div role="tablist" aria-label="FAQ categories" className="flex flex-wrap gap-x-5 gap-y-3">
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
              className={`flex items-center gap-2 rounded-full px-[18px] py-[15px] text-left text-sm leading-[19px] ${
                on ? "bg-[#c4161c] font-bold text-[#f5f5f5]" : "bg-[#ebebeb] font-medium text-[#6b6b6b]"
              }`}
            >
              <span className="shrink-0">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      <div id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${active.id}`} className="mt-[54px] max-w-[911.5px]">
        {active.faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b-[1.333px] border-[#e2e2e2] pb-[33px] pt-8 first:pt-0">
              <h3>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-start justify-between gap-6 text-left text-lg font-bold leading-[29.867px] sm:text-[21.333px] ${
                    isOpen ? "text-[#c4161c]" : "text-[#080808]"
                  }`}
                >
                  {f.q}
                  <span
                    aria-hidden="true"
                    className={`flex size-[37.333px] shrink-0 items-center justify-center rounded-full text-[21.333px] font-normal transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-[#c4161c] text-[#f5f5f5]" : "bg-[#f0f0f0] text-[#767676]"
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
                  <p className="pt-[18.667px] text-base font-medium leading-[30.8px] text-[#5a5a5a] sm:text-[18.667px]">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
