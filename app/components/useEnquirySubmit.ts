"use client";

import { useRef, useState, type FormEvent } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const FORM_ENDPOINT = `${BASE_PATH}/api/enquiry-form`;
const THANK_YOU_PATH = "/thank-you";
const SOURCE_NAME = "Manufacturing Plant Construction";

const GENERIC_ERROR = "Something went wrong. Please try again.";
const NETWORK_ERROR = "Network error. Please check your internet connection and try again.";

// Posts a lead form to /api/enquiry-form (proxied to the Mekark enquiry API) and
// redirects to the thank-you page on success. Works for every form on the page.
export function useEnquirySubmit() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Ref guard: a second tap can land before React re-renders the disabled button
  const inFlight = useRef(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const values = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      location: get("location"),
      industry: get("industry"),
      sqf: get("sqft"),
      message: get("details"),
    };

    if (!values.name || !values.phone || !values.email || !values.location || !values.industry || !values.sqf) {
      setError("Please fill in all required fields.");
      return;
    }
    if (values.phone.replace(/\D/g, "").slice(-10).length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    inFlight.current = true;
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourceName: SOURCE_NAME,
          sourceDomain: window.location.hostname,
          sourceUrl: window.location.href,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.message || GENERIC_ERROR);
        inFlight.current = false;
        setSubmitting(false);
        return;
      }

      form.reset();
      window.location.href = `${BASE_PATH}${THANK_YOU_PATH}`;
    } catch (err) {
      console.error(err);
      setError(err instanceof TypeError ? NETWORK_ERROR : GENERIC_ERROR);
      inFlight.current = false;
      setSubmitting(false);
    }
  };

  return { onSubmit, submitting, error };
}
