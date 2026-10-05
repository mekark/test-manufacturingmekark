import type { ReactNode } from "react";

const icon = {
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
    text: "Soil testing, load requirements and statutory checks before a single drawing is finalised.",
    icon: (
      <svg {...icon}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Design & Engineering",
    text: "Structural and MEP design sized for your process, equipment and future expansion.",
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
    title: "In-House Fabrication",
    text: "Steel cut, welded and coated inside our own 6,00,000 sq.ft facility.",
    icon: (
      <svg {...icon}>
        <path d="M12 16h.01M16 16h.01M8 16h.01" />
        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422L15 10.5V8.5a.5.5 0 0 0-.769-.422L9 11.5V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
      </svg>
    ),
  },
  {
    title: "Civil Works & Erection",
    text: "Foundation, structural erection, roofing and cladding executed by our own site teams.",
    icon: (
      <svg {...icon}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
      </svg>
    ),
  },
  {
    title: "Commissioning & Handover",
    text: "Statutory sign-offs, fire NOC and documentation closed before you take possession.",
    icon: (
      <svg {...icon}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function ProjectApproach() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-12 md:px-10 md:py-16 xl:p-20">
        <div className="max-w-[1015px]">
          <h2 className="text-[36px] font-bold leading-[1.11] text-[#0f172a] sm:text-[52px] xl:text-[66px] xl:leading-[73.333px]">
            Our <span className="text-[#ed1d23]">Project Approach</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[#64748b] md:text-[20px] xl:text-[24px] xl:leading-[34px]">
            A manufacturing building moves through five stages before it&apos;s yours to operate. We run all five under one project office.
          </p>
        </div>

        <ol className="mt-[50px] grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex flex-col gap-[52px]">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[100px] top-[47.67px] hidden h-px w-[calc(100%-60px)] bg-[#e4dfe0] xl:block"
                />
              )}
              <div className="flex h-[92px] w-[100px] items-center justify-center rounded-[18px] border border-[#e4dfe0] bg-white">
                {s.icon}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[26px] font-bold leading-[21.333px] text-[#ed1d23]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[21px] font-bold leading-6 text-black">{s.title}</h3>
                <p className="max-w-[270px] text-[18px] leading-[22.667px] text-[#64748b]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
