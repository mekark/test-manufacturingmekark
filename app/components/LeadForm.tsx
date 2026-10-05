const field =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-4 py-3.5 text-base text-[#080808] placeholder:text-[#757575] md:h-[46px] md:py-0 md:text-[12px] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c]";
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
        {text}
      </label>
      {children}
    </div>
  );
}

export default function LeadForm() {
  return (
    <form
      method="post"
      className="w-full rounded-[24px] bg-white/[0.01] px-5 py-6 shadow-[0_26px_88px_rgba(0,0,0,0.06)] backdrop-blur-[15px] sm:rounded-[32px] sm:bg-[#101010]/85 sm:py-8 sm:shadow-[0_26px_88px_rgba(0,0,0,0.6)] sm:px-10 md:bg-white/5 md:py-11 md:backdrop-blur-[30px] xl:px-[50px]"
    >
      <h2 className="text-2xl font-extrabold leading-[normal] text-white sm:text-center md:text-[#080808]">
        Request Your Project Blueprint
      </h2>
      <p className="mt-1.5 text-sm font-medium sm:text-center leading-[19px] text-white">
        Get a custom layout, cost range &amp; 150-day* timeline
      </p>

      <div className="mt-4 grid gap-x-[35px] gap-y-3 sm:mt-[26px] sm:grid-cols-2 sm:gap-y-[14px]">
        <Field id="name" text="Full Name*">
          <input id="name" name="name" required autoComplete="name" placeholder="Enter Your name" className={field} />
        </Field>
        <Field id="location" text="Project Location">
          <input id="location" name="location" autoComplete="address-level2" placeholder="Enter Project Location" className={field} />
        </Field>
        <Field id="phone" text="Mobile Number*">
          <input id="phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="Mobile Number*" className={field} />
        </Field>
        <Field id="email" text="Email Address">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter Email Address" className={field} />
        </Field>
        <Field id="industry" text="Industry Type*">
          <select id="industry" name="industry" required defaultValue="" className={field}>
            <option value="" disabled>Select your Industry type</option>
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
        <Field id="sqft" text="Project Sq. Ft*">
          <select id="sqft" name="sqft" required defaultValue="" className={field}>
            <option value="" disabled>Select Sq.ft Requirement</option>
            <option>Below 10,000</option>
            <option>10,000 – 25,000</option>
            <option>25,000 – 50,000</option>
            <option>50,000 – 1,00,000</option>
            <option>Above 1,00,000</option>
          </select>
        </Field>
        <Field id="details" text="Requirement Details" className="sm:col-span-2">
          <textarea id="details" name="details" rows={3} placeholder="Enter Requirement Details" className={`${field} resize-none`} />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-4 h-12 w-full rounded-[10px] bg-[#c4161c] text-sm sm:mt-[26px] sm:h-[63.87px] sm:rounded-[9px] sm:text-lg font-bold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] active:scale-[0.99]"
      >
        Get My Free Quote →
      </button>
      <p className="mt-3 text-center text-xs leading-[18px] font-medium text-[#8a8a8a] sm:mt-3.5 sm:text-[#bfbfbf]">
        100% Transparent Consultation with single point project support
      </p>
    </form>
  );
}
