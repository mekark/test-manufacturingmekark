import Image from "next/image";

const field =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-4 py-3 text-base text-[#080808] placeholder:text-[#757575] md:text-[12px] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c]";
const label = "mb-1.5 block text-sm font-bold tracking-[0.3px] text-[#5a5a5a]";

const points = [
  "Expert review of your factory requirements",
  "Practical cost and timeline guidance",
  "Turnkey design, build & handover support",
  "Dedicated project team follow-up",
];

function Field({
  id,
  text,
  children,
  className = "",
}: {
  id: string;
  text: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={label}>
        {text}
      </label>
      {children}
    </div>
  );
}

function ContactCard({
  href,
  icon,
  eyebrow,
  title,
  titleClass,
}: {
  href: string;
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  titleClass: string;
}) {
  return (
    <a
      href={href}
      className="cta-card flex h-[96px] items-center gap-5 rounded-[29px] border border-black/5 bg-[#212121] px-5 sm:h-[120px] sm:px-7"
    >
      <span className="cta-card-icon flex size-14 shrink-0 items-center justify-center rounded-[24px] bg-[#cc000a] sm:size-16">
        {icon}
      </span>
      <span className="flex flex-col">
        {eyebrow && <span className="cta-eyebrow text-sm font-bold uppercase leading-[21px] text-[#a9a9a9] sm:text-base">{eyebrow}</span>}
        <span className={`cta-card-title text-white ${titleClass}`}>{title}</span>
      </span>
      <Image src="/hero/cta-arrow.svg" alt="" width={27} height={26} className="ml-auto shrink-0" />
    </a>
  );
}

export default function Cta() {
  return (
    <section id="contact" className="cta relative overflow-hidden bg-[#090909]">
      <Image
        src="/hero/cta-bg.webp"
        alt=""
        fill
        quality={60}
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(-62.6deg,rgba(16,21,25,0)_0.65%,#080b0f_83.2%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[213px] -top-[267px] size-[1035px] rounded-full bg-[#e40015]/30 opacity-90 blur-[62px]"
      />

      <div className="cta-inner relative mx-auto max-w-[1920px] px-5 py-12 md:px-10 md:py-16">
        <div className="cta-grid grid items-center gap-10">
          <div>
            <span className="cta-chip inline-flex rounded-full border border-[#fcd5d0] bg-[#feeae7] px-5 py-[9px] text-base font-semibold leading-[26px] text-[#cc000a]">
              Start Your Project
            </span>
            <h2 className="cta-title mt-6 text-[clamp(36px,9vw,64px)] font-extrabold leading-[1.05] text-white">
              Get a
              <br />
              <span className="text-[#ed1d23]">Free Consultation</span>
            </h2>
            <p className="cta-sub mt-6 max-w-[837px] text-base font-medium leading-[1.55] text-white/65 sm:text-lg">
              Tell us about your factory or manufacturing project. Our team will review your requirements and get back
              with a practical plan.
            </p>

            <ul className="cta-points mt-8 grid gap-x-8 gap-y-[18px] sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-4 text-base font-semibold text-white">
                  <span
                    aria-hidden="true"
                    className="cta-tick flex size-[37px] shrink-0 items-center justify-center rounded-full bg-[#c4161c]/50 text-[17px] text-[#f9f9f9]"
                  >
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="cta-cards mt-10 flex max-w-[693px] flex-col gap-5">
              <ContactCard
                href="tel:+919790924754"
                eyebrow="Call Now"
                title="+91 97909 24754"
                titleClass="text-[21px] font-extrabold leading-8"
                icon={<Image src="/hero/cta-call.svg" alt="" width={27} height={27} />}
              />
              <ContactCard
                href="https://wa.me/919790924754"
                title="WhatsApp Us Now"
                titleClass="cta-wa-title text-xl font-bold sm:text-[26px]"
                icon={<Image src="/hero/whatsapp.png" alt="" width={39} height={39} className="cta-wa" />}
              />
            </div>
          </div>

          <form
            method="post"
            className="cta-form mx-auto w-full max-w-[640px] rounded-[29px] border border-[#e2e2e2] bg-white px-5 py-8 shadow-[0_24px_40px_rgba(0,0,0,0.06)] sm:px-[46px] sm:py-[42px]"
          >
            <h3 className="text-center text-[22px] font-extrabold tracking-[-0.5px] text-[#080808]">
              Request Your Project Blueprint
            </h3>
            <p className="cta-form-sub mt-1.5 text-center text-[13px] font-medium text-[#9a9a9a]">
              Get a custom layout, cost range &amp; 150-day timeline
            </p>

            <div className="cta-fields mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              <Field id="cta-name" text="Full Name*">
                <input id="cta-name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
              </Field>
              <Field id="cta-location" text="Project Location">
                <input id="cta-location" name="location" autoComplete="address-level2" placeholder="Enter project location" className={field} />
              </Field>
              <Field id="cta-phone" text="Mobile Number*">
                <input id="cta-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="+91 98765 43210" className={field} />
              </Field>
              <Field id="cta-email" text="Email Address">
                <input id="cta-email" name="email" type="email" autoComplete="email" placeholder="abcd@gmail.com" className={field} />
              </Field>
              <Field id="cta-industry" text="Industry Type*">
                <select id="cta-industry" name="industry" required defaultValue="" className={field}>
                  <option value="" disabled>Select your Industry</option>
                  <option>Automotive</option>
                  <option>Engineering &amp; Machinery</option>
                  <option>Electronics</option>
                  <option>Food &amp; Beverage</option>
                  <option>Pharma &amp; Chemicals</option>
                  <option>Textiles</option>
                  <option>Warehousing &amp; Logistics</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field id="cta-sqft" text="Project Sq. Ft*">
                <select id="cta-sqft" name="sqft" required defaultValue="" className={field}>
                  <option value="" disabled>Select Sq. Ft Requirement</option>
                  <option>Below 10,000</option>
                  <option>10,000 – 25,000</option>
                  <option>25,000 – 50,000</option>
                  <option>50,000 – 1,00,000</option>
                  <option>Above 1,00,000</option>
                </select>
              </Field>
              <Field id="cta-details" text="Requirement Details" className="sm:col-span-2">
                <textarea id="cta-details" name="details" rows={3} placeholder="Enter requirement details" className={`${field} resize-none`} />
              </Field>
            </div>

            <button
              type="submit"
              className="cta-submit mt-5 h-[58px] w-full rounded-lg bg-[#c4161c] text-base font-extrabold text-[#f5f5f5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] active:scale-[0.99]"
            >
              Get My Free Quote →
            </button>
            <p className="cta-note mt-4 text-center text-[11px] font-medium tracking-[0.3px] text-[#5a5a5a]">
              100% Transparent Consultation with single point project support
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
