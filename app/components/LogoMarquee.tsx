// `i` is the tile position in /hero/logos.webp (18 tiles). Removed tiles (9, 10) stay in the sprite but are skipped.
const CLIENTS = [
  { name: "VWU", i: 0 },
  { name: "Caterpillar", i: 1 },
  { name: "Voltas", i: 2 },
  { name: "TVS", i: 3 },
  { name: "Tata Electronics", i: 4 },
  { name: "Schwing Stetter", i: 5 },
  { name: "SRF", i: 6 },
  { name: "Saveetha", i: 7 },
  { name: "Sarvam", i: 8 },
  { name: "Reliance", i: 11 },
  { name: "Orbittal", i: 12 },
  { name: "NSI", i: 13 },
  { name: "MRF", i: 14 },
  { name: "L&T", i: 15 },
  { name: "LAF", i: 16 },
  { name: "Komatsu", i: 17 },
];

// Phones show four static tiles (Figma): L&T, Caterpillar, TVS, Tata, picked from the same sprite via CSS order.
const MOBILE_ORDER: Record<string, number> = { "L&T": 0, Caterpillar: 1, TVS: 2, "Tata Electronics": 3 };

export default function LogoMarquee() {
  return (
    <div className="hero-trust w-full max-w-[847px] rounded-[10px] bg-gradient-to-b from-[#08090a] to-[#654528] px-4 py-6 sm:h-[147px] sm:rounded-[18px] sm:from-[#060606] sm:to-[#693f1d]/50 sm:py-4 sm:pl-8 sm:pr-[26px] sm:pt-[21px]">
      <p className="hero-trust-label mb-4 text-[14px] font-semibold uppercase leading-5 text-[#ed1d23] sm:text-[#fa7783] sm:mb-[31px] sm:text-[14px]">
        Trusted Across India
      </p>
      <div
        className="overflow-hidden"
        role="img"
        aria-label={`Trusted by ${CLIENTS.map((c) => c.name).join(", ")}`}
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].flatMap((copy) =>
            CLIENTS.map(({ name, i }) => {
              const m = copy === 0 ? MOBILE_ORDER[name] : undefined;
              return (
                <span
                  key={`${copy}-${name}`}
                  className={`logo-tile ${m === undefined ? "max-sm:hidden" : "max-sm:[order:var(--o)]"}`}
                  style={{ "--i": i, "--o": m } as React.CSSProperties}
                />
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
