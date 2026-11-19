"use client";

import OfficesDirectory from "./OfficesDirectory";
import { PHONE_NUMBER, WHATSAPP_URL } from "./contact";
import { emailPattern, locationPattern, namePattern, phonePattern } from "./formValidation";
import { useEnquirySubmit } from "./useEnquirySubmit";
import Image from "next/image";
import ArtImage from "./ArtImage";

const field =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-4 py-3 text-xs text-[#080808] placeholder:text-[#757575] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c]";
const label = "max-md:sr-only mb-1.5 block text-sm font-bold tracking-[0.3px] text-[#5a5a5a]";

const points = [
  "Layout recommendation for your industry",
  "Cost estimate range",
  "Project execution timeline",
  "PEB vs Conventional insights",
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
        {text.endsWith("*") ? (
          <>
            {text.slice(0, -1)}
            <span className="text-[#ed1d23]">*</span>
          </>
        ) : (
          text
        )}
      </label>
      {children}
    </div>
  );
}

// Card styles ported from the civilconstruction-mekark-ad CTA (84px tall, 48px red icon tile, small arrow).
function ContactCard({
  href,
  icon,
  eyebrow,
  title,
  titleClass = "",
  external,
}: {
  href: string;
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  titleClass?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="cta-card flex w-full items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 sm:h-[84px] sm:w-auto sm:min-w-0 sm:flex-1 sm:rounded-[22px] sm:px-5 sm:py-0 sm:max-lg:min-w-[280px]"
    >
      <span className="cta-card-icon flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] sm:size-12 sm:rounded-2xl">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col items-start gap-0.5 sm:gap-0">
        {eyebrow && <span className="cta-eyebrow text-[10px] font-bold uppercase leading-4 whitespace-nowrap text-[#a9a9a9] sm:text-[13px] sm:leading-[18px]">{eyebrow}</span>}
        <span className={`cta-card-title w-full whitespace-nowrap text-white ${titleClass}`}>{title}</span>
      </span>
      <Image src={"/hero/cta-arrow.svg"} alt="" width={27} height={26} className="cta-card-arrow h-[26px] w-6 shrink-0 sm:h-auto sm:w-5" />
    </a>
  );
}

export default function Cta() {
  const { onSubmit, submitting, error } = useEnquirySubmit();

  return (
    <section id="contact" className="cta relative overflow-hidden bg-[#090909]">
      {/* One art-directed background: portrait crop fading to black on phones (Figma 8698:8862), full-bleed from sm */}
      <div className="absolute inset-x-0 top-0 h-[601px] sm:inset-0 sm:h-auto">
        <ArtImage
          sources={[{ media: "(max-width: 639px)", src: "/hero/m-cta-bg.webp", width: 900, height: 1384, sizes: "100vw", quality: 60 }]}
          fallback={{ src: "/hero/cta-bg.webp", width: 1774, height: 887, sizes: "100vw", quality: 60 }}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-[70%] sm:bg-[linear-gradient(-62.6deg,rgba(16,21,25,0)_0.65%,#080b0f_83.2%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[180px] top-[-61px] size-[274px] rounded-full bg-[#e40015]/30 opacity-90 blur-[62px] sm:-right-[213px] sm:left-auto sm:-top-[267px] sm:size-[1035px]"
      />

      <div className="cta-inner relative mx-auto max-w-[1920px] px-5 pb-8 pt-9 sm:py-12 md:px-10 md:py-16">
        <div className="cta-grid grid grid-cols-[minmax(0,1fr)] items-center gap-[19px] sm:gap-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <h2 className="cta-title max-sm:px-5 text-[28px] font-extrabold leading-[34px] text-white sm:text-[clamp(36px,9vw,64px)] sm:leading-[1.05]">
              Get Your <span className="text-[#ed1d23]">Factory</span>
              <br />
              <span className="text-[#ed1d23]">Project</span> Blueprint
            </h2>

            <ul className="cta-points mt-4 flex flex-col gap-3 max-sm:px-5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-semibold text-white sm:rounded-[16px] sm:border sm:border-white/10 sm:bg-white/[0.06] sm:px-4 sm:py-[14px] sm:text-base sm:backdrop-blur-sm">
                  <span
                    aria-hidden="true"
                    className="cta-tick flex size-5 shrink-0 items-center justify-center rounded-full bg-[#c4161c]/50 text-[9px] font-bold text-white sm:size-[26px] sm:bg-[#e40015] sm:text-[13px]"
                  >
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="cta-cards mt-[14px] flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-5 lg:flex-nowrap">
              <ContactCard
                href={`tel:+91${PHONE_NUMBER}`}
                eyebrow="Call Now"
                title="+91 97909 24754"
                titleClass="text-sm font-extrabold leading-6 sm:text-[17px]"
                icon={<Image src={"/hero/cta-call.svg"} alt="" width={26} height={26} className="size-6 sm:size-5" />}
              />
              <ContactCard
                href={WHATSAPP_URL}
                external
                title="WhatsApp Us Now"
                titleClass="cta-wa-title text-sm font-bold leading-6 sm:text-[19px]"
                icon={<Image src="/hero/whatsapp.webp" alt="" width={39} height={39} className="cta-wa size-[30px] object-cover" />}
              />
            </div>
          </div>

          <form
            method="post"
            onSubmit={onSubmit}
            className="cta-form mx-auto w-full max-w-[640px] lg:col-start-2 lg:row-span-2 lg:row-start-1 rounded-3xl border border-[#e2e2e2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] sm:rounded-[29px] sm:px-[46px] sm:py-[42px]"
          >
            <h3 className="text-center text-lg font-extrabold sm:text-[22px] tracking-[-0.5px] text-[#080808]">
              Request Your Manufacturing Project
              <br className="max-sm:hidden" /> Blueprint &amp; Cost Estimate
            </h3>
            <p className="cta-form-sub mt-2 text-center text-xs sm:mt-1.5 sm:text-[13px] font-medium text-[#9a9a9a]">
              Get a custom structural layout, BOQ cost range &amp; 150-day execution timeline.
            </p>

            <div className="cta-fields mt-4 grid gap-x-8 gap-y-4 sm:mt-5 sm:grid-cols-2 sm:gap-y-3">
              <Field id="cta-name" text="Full Name*">
                <input id="cta-name" name="name" required autoComplete="name" {...namePattern} placeholder="Your name" className={field} />
              </Field>
              <Field id="cta-location" text="Project Location*">
                <input id="cta-location" name="location" required autoComplete="address-level2" {...locationPattern} placeholder="Enter Project Location" className={field} />
              </Field>
              <Field id="cta-phone" text="Mobile Number*">
                <input id="cta-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" {...phonePattern} placeholder="Mobile Number e.g. 9876543210" className={field} />
              </Field>
              <Field id="cta-email" text="Email Address*">
                <input id="cta-email" name="email" type="email" required autoComplete="email" {...emailPattern} placeholder="abcd@gmail.com" className={field} />
              </Field>
              <Field id="cta-industry" text="Industry Type*">
                <input id="cta-industry" name="industry" required placeholder="Enter your Industry type" className={field} />
              </Field>
              <Field id="cta-sqft" text="Project Sq. Ft*">
                <select id="cta-sqft" name="sqft" required defaultValue="" className={`${field} select-chevron`}>
                  <option value="" disabled>Select Sq.ft Requirement</option>
                  <option value="10,000 - 20,000 Sq.ft">10,000 – 20,000</option>
                  <option value="20,000 - 30,000 Sq.ft">20,000 – 30,000</option>
                  <option value="30,000 - 50,000 Sq.ft">30,000 – 50,000</option>
                  <option value="Above 50,000 Sq.ft">Above 50,000 sq.ft</option>
                </select>
              </Field>
              <Field id="cta-details" text="Requirement Details*" className="sm:col-span-2">
                <textarea id="cta-details" name="details" rows={4} required placeholder="Enter Requirement Details" className={`${field} resize-none max-sm:h-[46px] sm:h-[82px]`} />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="cta-submit mt-4 h-[46px] w-full rounded-lg bg-[#c4161c] text-sm font-semibold sm:mt-5 sm:h-[58px] sm:text-base sm:font-extrabold text-[#f5f5f5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Request an Estimate"}
            </button>
            {error && (
              <p role="alert" className="mt-3 text-center text-xs font-medium text-[#c4161c]">
                {error}
              </p>
            )}
            <p className="cta-note mt-4 text-center text-xs sm:text-[11px] font-medium tracking-[0.3px] text-[#5a5a5a]">
              100% Transparent Consultation with single point project support
            </p>
          </form>

          {/* Office locations: after the form on phones/tablet, under the contact cards on desktop */}
          <OfficesDirectory className="lg:col-start-1 lg:row-start-2 lg:mt-[calc(16*var(--u))] lg:w-[calc(693.333*var(--u))]" />
        </div>
      </div>
    </section>
  );
}
