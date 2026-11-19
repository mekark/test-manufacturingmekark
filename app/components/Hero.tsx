import Image from "next/image";
import ArtImage from "./ArtImage";
import LeadForm from "./LeadForm";
import LogoMarquee from "./LogoMarquee";
import { PHONE_NUMBER, WHATSAPP_URL } from "./contact";

const PHONE = `+91${PHONE_NUMBER}`;
const WHATSAPP = WHATSAPP_URL;

// Row-major, as laid out in the Figma 2x3 grid.
const POINTS = [
  "Automotive, EV, Electronics, Electrical & Semiconductor.",
  "Renewable Energy, Engineering,Electrical Vehicle.",
  "Cold Storage & Clean Rooms, Machinery & Heavy Manufacturing.",
  "Textile, Pharmaceutical, Chemical & Life Sciences.",
  "Metals, Steel, Building Materials, Packaging & Plastics, Logistics.",
  "Apparel, Leather, Food Processing, Beverage, FMCG.",
];

const STATS = [
  { value: "300", accent: "+", label: "Projects" },
  { value: "18", accent: "+", label: "Years Experience" },
  { value: "40,000 ", accent: "MT", label: "Annual Production" },
  { value: "250", accent: "+", label: "Engineering Team" },
];

export default function Hero() {
  return (
    <section id="top" className="hero relative isolate z-40 overflow-hidden bg-[#060606] pt-14 text-white md:pt-0">
      {/* Single background: art-directed <picture>. Figma: 1697x1129 image pinned right (88.4% of 1920), 48px cropped at top */}
      <div className="hero-bg absolute inset-0 -z-20 lg:inset-auto lg:right-0 lg:top-[-48px] lg:h-[1129px] lg:w-[88.4%]">
        <ArtImage
          priority
          sources={[{ media: "(max-width: 1023px)", src: "/hero/m-bg.webp", width: 941, height: 1672, sizes: "100vw", quality: 60 }]}
          fallback={{ src: "/hero/bg.webp", width: 1537, height: 1023, sizes: "89vw", quality: 60 }}
          className="absolute inset-0 size-full object-cover object-top lg:object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(6,6,6,0.94),rgba(6,6,6,0.88)_40%,rgba(6,6,6,0.78))] lg:bg-[linear-gradient(to_right,#060606_25%,rgba(6,6,6,0.8)_43%,rgba(6,6,6,0)_88%)]" />

      {/* One header: fixed bar on phones, static at md+ */}
      <header className="hero-header fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-white/10 bg-[#060606]/90 px-5 backdrop-blur-md md:static md:mx-auto md:h-20 md:max-w-[1920px] md:border-0 md:bg-transparent md:px-10 md:backdrop-blur-none xl:px-20">
        <a href="#top" aria-label="Mekark home">
          <Image src="/hero/mekark-logo.webp" alt="Mekark" width={132} height={46} priority className="hero-logo h-auto w-[88px] md:w-[132px]" />
        </a>
        <a href="#quote" className="hero-quote rounded-lg bg-[#c4161c] px-3.5 py-2 text-xs font-semibold leading-[18px] text-[#f5f5f5] shadow-[0_6px_14px_rgba(196,22,28,0.3)] md:px-6 md:py-2.5 md:text-base md:leading-[22px] md:shadow-[0_9px_18px_rgba(196,22,28,0.3)]">
          Request an Estimate
        </a>
      </header>

      <div className="hero-body mx-auto max-w-[1920px] px-5 md:px-10 xl:px-20">
      <div className="hero-grid grid max-w-[1733px] items-center grid-cols-[minmax(0,1fr)] gap-[13px] pb-12 pt-0 sm:pt-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:py-12">
        {/* Below md this wrapper dissolves so the CTAs can be ordered after the form without a second copy */}
        <div className="hero-left flex flex-col gap-[13px] max-md:contents lg:gap-6">
          <div className="hero-pill relative z-10 flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 max-lg:-mb-[17px] lg:gap-[10.667px] lg:border-[1.333px] lg:px-[17.333px] lg:py-[9.333px]">
            <span className="hero-dot size-2 rounded-full bg-[#e40015] lg:size-[10.667px]" />
            <span className="hero-pill-text text-[9px] font-medium leading-4 lg:text-base lg:leading-[21.333px]">
              Turnkey Manufacturing plant construction company &amp; <span className="max-lg:hidden">Manufacturing plant </span>contractor
            </span>
          </div>

          <div className="hero-copy flex flex-col gap-3 lg:gap-4">
            {/* Phones/tablets: hero art behind the heading (CSS background, not downloaded on desktop) */}
            <div className="hero-visual relative isolate -mx-5 h-[252px] overflow-hidden px-5 pt-2.5 md:-mx-10 md:px-10 lg:contents">
              <ArtImage
                priority
                hideAt="(min-width: 1024px)"
                fallback={{ src: "/hero/m-hero-2.webp", width: 1000, height: 624, sizes: "100vw", quality: 70 }}
                sources={[]}
                className="absolute inset-0 -z-20 size-full object-cover object-top lg:hidden"
              />
              <h1 className="hero-h1 max-w-[879px] font-bold lg:flex lg:flex-col lg:items-start lg:gap-[14px] lg:text-[50px] lg:leading-[58px]">
                <span>
                  <span className="block text-[28px] leading-[31px] sm:text-[44px] sm:leading-[1.1] lg:inline lg:[font-size:inherit] lg:[line-height:inherit]">Manufacturing Plant.</span>{" "}
                  <span className="block text-sm leading-[18px] sm:text-2xl sm:leading-8 lg:inline lg:[font-size:inherit] lg:[line-height:inherit]">Design to Delivery</span>
                </span>
                {/* Red bar: pinned to the art on phones, a red box under the heading on desktop */}
                <span className="hero-h1-box absolute left-0 top-[220px] flex h-[23px] w-fit items-center bg-[#c4161c] pl-5 pr-4 text-sm font-bold text-white md:pl-10 lg:static lg:block lg:bg-[#ed1d23] lg:px-[5px] lg:text-[48px] lg:leading-[56px]">
                  Construction &amp; Handover - 150 days
                  <span className="hero-h1-star relative -top-1 text-xs font-normal lg:-top-3 lg:ml-0.5 lg:text-[30px] lg:leading-none">*</span>
                </span>
              </h1>
            </div>
            <p className="hero-sub text-[13px] text-[#f3f3f3] md:text-[20px] md:leading-7 md:text-[#a9a9a9] lg:max-w-[879px] lg:text-[22px]">
              <span className="text-[#ed1d23] lg:font-bold">MEKARK</span> - Builds Every Structure You Want.
              <br />
              All kinds of Manufacturing plant constructions – <span className="font-bold text-white">ALL INDIA</span>
            </p>
          </div>

          <div className="hero-copy flex flex-col gap-3 lg:gap-4">
            <p className="hero-sub text-[13px] font-bold text-white md:text-[20px] lg:text-[22px] lg:leading-7 lg:text-[#f3f3f3]">In-House PEB Manufacturing - Civil - PEB – MEP - Turnkey EPC.</p>
            <ul className="hero-points grid gap-x-6 gap-y-1.5 text-xs font-medium text-white/70 sm:grid-cols-2 sm:gap-y-4 sm:text-base sm:font-normal lg:gap-x-5 lg:text-[18px] lg:leading-5 lg:text-[#f7f7f7]">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-2 px-3 sm:items-start sm:px-0 lg:items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[15px] shrink-0 sm:size-6">
                    <path d="M9 18l6-6-6-6" stroke="#E40015" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="leading-5 sm:leading-6 lg:leading-5">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <LogoMarquee />

          <dl className="hero-stats grid grid-cols-2 gap-3 sm:flex sm:w-fit sm:flex-wrap sm:gap-x-12 sm:gap-y-6 sm:border-t sm:border-[#e2e2e2] sm:py-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-1 rounded-[10px] border border-white/[0.08] bg-[#1a1a1a] px-4 py-3 min-[380px]:px-5 sm:gap-[5.3px] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <dt className="text-[10px] font-semibold uppercase text-[#9a9a9a] sm:text-base">{s.label}</dt>
                <dd className="whitespace-nowrap text-xl font-extrabold leading-[normal] min-[380px]:text-2xl sm:text-[42px]">
                  {s.value}
                  <span className={s.accent === "MT" ? "text-[#c4161c] sm:text-[#ed1d23]" : "text-[#c4161c]"}>{s.accent}</span>
                </dd>
              </div>
            ))}
          </dl>

          {/* One CTA row: inside the left column at md+, after the form on phones (order) */}
          <div className="hero-ctas flex flex-wrap justify-center gap-[14px] px-4 max-md:order-1 max-md:mt-[3px] md:justify-start md:gap-[30px] md:px-0">
            <a href={WHATSAPP} className="hero-cta flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#e5091f] md:h-[55px] md:w-auto md:px-6 md:text-base">
              WhatsApp
              <Image src="/hero/hero-wa.svg" alt="" width={18} height={18} />
            </a>
            <a href={`tel:${PHONE}`} className="hero-cta flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 text-sm font-bold md:h-[55px] md:w-auto md:px-6 md:text-base">
              Call Now
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9.75 1.5a6.75 6.75 0 0 1 6.75 6.75M9.75 4.5a3.75 3.75 0 0 1 3.75 3.75M10.374 12.426a.75.75 0 0 0 .91-.227l.266-.349a1.5 1.5 0 0 1 1.2-.6H15a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 15 16.5C7.8 16.5 1.5 10.2 1.5 3A1.5 1.5 0 0 1 3 1.5h2.25A1.5 1.5 0 0 1 6.75 3v2.25a1.5 1.5 0 0 1-.6 1.2l-.35.263a.75.75 0 0 0-.22.925 11.3 11.3 0 0 0 4.794 4.789z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div id="quote" className="max-sm:px-4 max-md:mt-[3px]">
          <LeadForm />
        </div>
      </div>
      </div>
    </section>
  );
}
