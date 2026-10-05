const CLIENTS = [
  "VWU",
  "Voltas",
  "TVS",
  "Tata Electronics",
  "Schwing Stetter",
  "SRF",
  "Saveetha",
  "Sarvam",
  "Sanmar",
  "Sanmar Group",
  "Reliance",
  "Orbittal",
  "NSI",
  "MRF",
  "L&T",
  "LAF",
  "Komatsu",
];

export default function LogoMarquee() {
  return (
    <div className="w-full max-w-[847px] rounded-[10px] bg-gradient-to-b from-[#08090a] to-[#654528] px-4 py-6 sm:h-[147px] sm:rounded-[18px] sm:from-[#060606] sm:to-[#693f1d]/50 sm:py-4 sm:pl-8 sm:pr-[26px] sm:pt-[21px]">
      <p className="mb-4 text-[14px] font-semibold uppercase leading-5 text-[#ed1d23] sm:text-[#fa7783] sm:mb-[31px] sm:text-[14px]">
        Trusted Across India
      </p>
      <div className="flex flex-wrap gap-x-[18px] gap-y-2 sm:hidden" aria-label={`Trusted by ${CLIENTS.slice(0, 4).join(", ")}`} role="img">
        {CLIENTS.slice(0, 4).map((name, i) => (
          <span key={name} aria-hidden="true" className="logo-tile-sm" style={{ backgroundPositionX: `${-i * 63}px` }} />
        ))}
      </div>
      <div
        className="hidden overflow-hidden sm:block"
        role="img"
        aria-label={`Trusted by ${CLIENTS.join(", ")}`}
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].flatMap((copy) =>
            CLIENTS.map((name, i) => (
              <span
                key={`${copy}-${name}`}
                className="logo-tile"
                style={{ backgroundPositionX: `${-i * 90}px` }}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}
