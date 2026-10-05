import Image from "next/image";
import LeadForm from "./LeadForm";
import LogoMarquee from "./LogoMarquee";

// Replace with the real contact details.
const PHONE = "+919876543210";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}`;

const POINTS = [
  "End-to-End Turnkey Factory Construction",
  "Integrated Design, Fabrication & Construction",
  "Precision-Engineered Industrial Buildings",
  "Single-Point Accountability from Design to Delivery",
];

const STATS = [
  { value: "200", accent: "+", label: "Projects" },
  { value: "18", accent: "+", label: "Years Experience" },
  { value: "40,000 ", accent: "MT", label: "Annual Production" },
  { value: "175", accent: "+", label: "Engineering Team" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#060606] text-white xl:min-h-[1017px]">
      {/* Figma: 1697x1129 image pinned right (88.4% of 1920), 48px cropped at top */}
      {/* Mobile/tablet background */}
      <div className="absolute inset-0 -z-20 lg:hidden">
        <Image src="/hero/m-bg.webp" alt="" fill quality={60} sizes="100vw" className="object-cover object-top" />
      </div>
      <div className="absolute -z-20 hidden lg:right-0 lg:top-[-48px] lg:block lg:h-[1129px] lg:w-[88.4%]">
        <Image
          src="/hero/bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={60}
          sizes="89vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[#0f0f0f]/55 lg:bg-transparent lg:bg-[linear-gradient(to_right,#060606_25%,rgba(6,6,6,0.8)_43%,rgba(6,6,6,0)_88%)]" />

      <header className="mx-auto flex h-20 max-w-[1920px] items-center justify-between px-5 md:px-10 xl:px-20">
        <Image src="/hero/mekark-logo.webp" alt="Mekark" width={132} height={46} priority className="h-auto w-[104px] md:w-[132px]" />
        <a href="#quote" className="rounded-lg bg-[#c4161c] px-5 py-2.5 text-sm leading-[22px] font-semibold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] md:px-6 md:text-base md:leading-[22px]">
          Get Free Quote
        </a>
      </header>

      <div className="mx-auto max-w-[1920px] px-5 md:px-10 xl:px-20">
      <div className="grid max-w-[1733px] items-center gap-4 pb-12 pt-0 sm:gap-10 sm:pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:py-12 xl:mb-[88px] xl:mt-[9px] xl:min-h-[840px] xl:py-0 min-[1720px]:grid-cols-[879px_660px] min-[1720px]:justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="relative -mx-5 h-[245px] overflow-hidden px-5 pt-[18px] md:-mx-10 md:px-10 lg:m-0 lg:h-auto lg:overflow-visible lg:p-0">
              <div aria-hidden="true" className="absolute inset-0 lg:hidden">
                <Image src="/hero/m-hero.webp" alt="" fill priority quality={70} sizes="100vw" className="object-cover object-[60%_center]" />
                <div className="absolute inset-x-0 top-0 h-[150px] bg-gradient-to-b from-[#060606] via-[#3e3e3e]/75 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[55px] bg-gradient-to-b from-transparent to-[#1e1e1e]/90" />
              </div>
              <h1 className="relative max-w-[879px] text-[28px] font-bold leading-[31px] sm:text-[44px] sm:leading-[1.1] xl:text-[54px] xl:leading-[58px]">
              One Contract. <span className="text-[#ed1d23]">Your Entire Plant.</span>
              <br />
              No Handoffs.
              </h1>
            </div>
            <p className="max-w-[879px] text-sm leading-[1.4] text-[#f3f3f3] md:text-[20px] md:leading-7 md:text-[#a9a9a9] xl:text-[22px]">
              From concept to commissioning, Inbuilt Infra develops high-performance factory buildings tailored to the operational needs of manufacturers. Every project is executed with engineering precision, single-point accountability, and uncompromising quality.
            </p>
          </div>

          <ul className="grid gap-x-6 gap-y-1.5 text-xs font-medium text-white/70 sm:grid-cols-2 sm:gap-y-4 sm:text-base sm:font-normal xl:text-[18px] min-[1720px]:grid-cols-[repeat(2,max-content)] min-[1720px]:gap-y-5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 px-3 sm:items-start sm:px-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[15px] shrink-0 sm:size-6">
                  <path d="M9 18l6-6-6-6" stroke="#E40015" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="leading-5 sm:leading-6 min-[1720px]:whitespace-nowrap">{p}</span>
              </li>
            ))}
          </ul>

          <LogoMarquee />

          <dl className="grid grid-cols-2 gap-3 sm:flex sm:w-fit sm:flex-wrap sm:gap-x-12 sm:gap-y-6 sm:border-t sm:border-[#e2e2e2] sm:py-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-1 rounded-[10px] border border-white/[0.08] bg-[#1a1a1a] px-4 py-3 min-[380px]:px-5 sm:gap-[5.3px] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <dt className="text-[10px] font-semibold uppercase text-[#9a9a9a] sm:text-base">{s.label}</dt>
                <dd className="whitespace-nowrap text-xl font-extrabold leading-[normal] min-[380px]:text-2xl sm:text-[42px]">
                  {s.value}
                  <span className="text-[#c4161c] sm:text-[#ed1d23]">{s.accent}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="hidden flex-wrap gap-4 md:flex md:gap-[30px]">
            <a href={WHATSAPP} className="flex h-[55px] items-center gap-2 rounded-full bg-white px-6 text-base font-bold text-[#e5091f]">
              WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
                <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.7a4 4 0 0 1-1.9-1.9l.7-.8-1-2z" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={`tel:${PHONE}`} className="flex h-[55px] items-center gap-2 rounded-full border border-white px-6 text-base font-bold">
              Call Now
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9.75 1.5a6.75 6.75 0 0 1 6.75 6.75M9.75 4.5a3.75 3.75 0 0 1 3.75 3.75M10.374 12.426a.75.75 0 0 0 .91-.227l.266-.349a1.5 1.5 0 0 1 1.2-.6H15a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 15 16.5C7.8 16.5 1.5 10.2 1.5 3A1.5 1.5 0 0 1 3 1.5h2.25A1.5 1.5 0 0 1 6.75 3v2.25a1.5 1.5 0 0 1-.6 1.2l-.35.263a.75.75 0 0 0-.22.925 11.3 11.3 0 0 0 4.794 4.789z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div id="quote" className="scroll-mt-4 max-sm:px-4 min-[1720px]:mr-[34px]">
          <LeadForm />
        </div>

        {/* Mobile: actions sit below the form */}
        <div className="flex justify-center gap-[14px] px-4 md:hidden">
          <a href={WHATSAPP} className="flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#e5091f]">
            WhatsApp
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
              <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.7a4 4 0 0 1-1.9-1.9l.7-.8-1-2z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={`tel:${PHONE}`} className="flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 text-sm font-bold">
            Call Now
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9.75 1.5a6.75 6.75 0 0 1 6.75 6.75M9.75 4.5a3.75 3.75 0 0 1 3.75 3.75M10.374 12.426a.75.75 0 0 0 .91-.227l.266-.349a1.5 1.5 0 0 1 1.2-.6H15a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 15 16.5C7.8 16.5 1.5 10.2 1.5 3A1.5 1.5 0 0 1 3 1.5h2.25A1.5 1.5 0 0 1 6.75 3v2.25a1.5 1.5 0 0 1-.6 1.2l-.35.263a.75.75 0 0 0-.22.925 11.3 11.3 0 0 0 4.794 4.789z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
