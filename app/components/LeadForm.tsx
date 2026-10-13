"use client";

import { namePattern, phonePattern } from "./formValidation";
import { useEnquirySubmit } from "./useEnquirySubmit";

const field =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-[18px] py-3.5 text-xs text-[#080808] placeholder:text-[#757575] md:h-[46px] md:py-0 md:text-[12px] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c]";
const label = "max-md:sr-only mb-[6.6px] block text-sm leading-[19px] font-bold text-white";

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

export default function LeadForm() {
  const { onSubmit, submitting, error } = useEnquirySubmit();

  return (
    <form
      method="post"
      onSubmit={onSubmit}
      className="w-full rounded-[24px] border border-[#7a7676] bg-white/[0.01] px-5 py-6 shadow-[0_26px_88px_rgba(0,0,0,0.06)] backdrop-blur-[15px] sm:rounded-[32px] sm:border-0 sm:bg-[#101010]/85 sm:py-8 sm:shadow-[0_26px_88px_rgba(0,0,0,0.6)] sm:px-10 md:bg-white/5 md:py-11 md:backdrop-blur-[30px] xl:px-[50px]"
    >
      <h2 className="text-2xl font-extrabold leading-[normal] text-white sm:text-center md:text-[#080808]">
        Request Your Project Blueprint
      </h2>
      <p className="mt-1.5 text-sm font-medium sm:text-center leading-[19px] text-white">
        Get a custom layout, cost range &amp; 150-day* timeline
      </p>

      <div className="mt-4 grid gap-x-[35px] gap-y-3 sm:mt-[26px] sm:grid-cols-2 sm:gap-y-[14px]">
        <Field id="name" text="Full Name*">
          <input id="name" name="name" required autoComplete="name" {...namePattern} placeholder="Enter Your name" className={field} />
        </Field>
        <Field id="location" text="Project Location">
          <input id="location" name="location" autoComplete="address-level2" {...namePattern} placeholder="Enter Project Location" className={field} />
        </Field>
        <Field id="phone" text="Mobile Number*">
          <input id="phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" {...phonePattern} placeholder="Mobile Number*" className={field} />
        </Field>
        <Field id="email" text="Email Address">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter Email Address" className={field} />
        </Field>
        <Field id="industry" text="Industry Type*">
          <input id="industry" name="industry" required placeholder="Enter your Industry type" className={field} />
        </Field>
        <Field id="sqft" text="Project Sq. Ft*">
          <select id="sqft" name="sqft" required defaultValue="" className={`${field} select-chevron`}>
            <option value="" disabled>Select Sq.ft Requirement</option>
            <option value="10,000 - 20,000 Sq.ft">10,000 – 20,000</option>
            <option value="20,000 - 30,000 Sq.ft">20,000 – 30,000</option>
            <option value="30,000 - 50,000 Sq.ft">30,000 – 50,000</option>
            <option value="Above 50,000 Sq.ft">Above 50,000 sq.ft</option>
          </select>
        </Field>
        <Field id="details" text="Requirement Details" className="sm:col-span-2">
          <textarea id="details" name="details" rows={3} placeholder="Enter Requirement Details" className={`${field} resize-none`} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 h-12 w-full rounded-[10px] bg-[#c4161c] text-sm sm:mt-[26px] sm:h-[63.87px] sm:rounded-[9px] sm:text-lg font-bold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          "Submitting..."
        ) : (
          "Get a Free Quote →"
        )}
      </button>
      {error && (
        <p role="alert" className="mt-3 text-center text-xs font-medium text-[#ff8f92]">
          {error}
        </p>
      )}
      <p className="mt-3 text-center text-xs leading-[18px] font-medium text-[#8a8a8a] sm:mt-3.5 sm:text-[#bfbfbf]">
        100% Transparent Consultation with single point project support
      </p>
    </form>
  );
}
