import type { ReactNode } from "react";

const icon = {
  className: "size-5 sm:size-10",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ed1d23",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const STEPS: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Site & Feasibility Study",
    text: "Soil testing, approvals, utility availability, and budget checks.",
    icon: (
      <svg {...icon}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Layout & Engineering",
    text: "Engineered around your process flow, machinery loads, and material movement.",
    icon: (
      <svg {...icon}>
        <path d="m12.99 6.74 1.93 3.44" />
        <path d="M19.136 12a10 10 0 0 1-14.271 0" />
        <path d="m21 21-2.16-3.84" />
        <path d="m3 21 8.02-14.26" />
        <circle cx="12" cy="5" r="2" />
      </svg>
    ),
  },
  {
    title: "Factory Fabrication",
    text: "Precision-made columns, rafters, and purlins, made in-house.",
    icon: (
      <svg {...icon}>
        <path d="M12 16h.01M16 16h.01M8 16h.01" />
        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422L15 10.5V8.5a.5.5 0 0 0-.769-.422L9 11.5V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
      </svg>
    ),
  },
  {
    title: "On-Site Erection",
    text: "Quick structural assembly with minimal site disruption.",
    icon: (
      <svg {...icon}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
      </svg>
    ),
  },
  {
    title: "Quality Checks",
    text: "Inspection, installation & compliance checks.",
    icon: (
      <svg {...icon}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Handover & Support",
    text: "Snag clearance, documentation, and after-sales support.",
    icon: (
      <svg {...icon}>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
];

export default function ProjectApproach() {
  return (
    <section className="pa bg-[#f9f6f7]">
      <div className="pa-inner mx-auto max-w-[1920px] px-5 py-8 md:px-10 md:py-16 xl:p-20">
        <div className="max-w-[1015px] xl:max-w-none">
          <h2 className="pa-title text-[26px] font-bold leading-[34px] text-[#0f172a] sm:text-[52px] sm:leading-[1.11] xl:text-[66px] xl:leading-[73.333px]">
            Our Turnkey <span className="text-[#ed1d23]">Manufacturing Plant Construction</span>
          </h2>
          <p className="pa-sub mt-3 text-sm leading-5 text-[#64748b] sm:mt-4 md:text-[20px] md:leading-7 xl:max-w-[1652px] xl:text-[24px] xl:leading-[34px]">
            As a manufacturing plant construction company, we follow a proven 6-step process to ensure on-time delivery.
          </p>
        </div>

        <ol className="pa-list mt-6 grid gap-x-10 gap-y-5 sm:mt-[50px] sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-[27px]">
          {STEPS.map((s, i) => (
            <li key={s.title} className="pa-item relative flex items-center gap-[17px] sm:flex-col sm:items-start sm:gap-[52px]">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-20px] left-4 top-[calc(50%+16.5px)] w-px bg-[#d4d4d4] sm:hidden"
                />
              )}
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-0 h-[calc(50%-16.5px)] w-px bg-[#d4d4d4] sm:hidden"
                />
              )}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pa-line absolute left-[100px] top-[47.67px] hidden h-px w-[calc(100%-60px)] bg-[#e4dfe0] xl:block"
                />
              )}
              <span
                aria-hidden="true"
                className="relative flex size-[33px] shrink-0 items-center justify-center rounded-full bg-[#f9f6f7] text-[14px] font-bold text-[#080808] sm:hidden"
              >
                {/* 8 dashes: circumference 2π·15.5 ≈ 97.4 → 8 × (9.2 dash + 3 gap) */}
                <svg viewBox="0 0 33 33" className="absolute inset-0 size-full" fill="none" aria-hidden="true">
                  <circle cx="16.5" cy="16.5" r="15.5" stroke="#bcbcbc" strokeWidth="1" strokeDasharray="9.2 2.98" />
                </svg>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-md bg-[#fffcfc] py-1.5 pl-2.5 pr-[9px] shadow-[-1px_1px_3px_rgba(30,30,30,0.1)] sm:contents">
                <div className="pa-icon relative flex size-5 shrink-0 items-center justify-center sm:h-[92px] sm:w-[100px] sm:rounded-[18px] sm:border sm:border-[#e4dfe0] sm:bg-white">
                  {s.icon}
                </div>
                <div className="pa-text flex min-w-0 flex-col gap-px sm:gap-3">
                  <span className="pa-num hidden text-[26px] font-bold leading-[21.333px] text-[#ed1d23] sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pa-h text-base font-semibold leading-normal text-[#0f172a] sm:text-[20px] sm:font-bold sm:leading-6 sm:text-black">{s.title}</h3>
                  <p className="pa-p text-xs leading-[18px] text-[#64748b] sm:max-w-[257px] sm:text-[18px] sm:leading-[22.667px]">{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
