import type { FormEvent } from "react";

// Shared input rules for every lead form.
export const onlyLetters = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
};

export const onlyDigits = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
};

export const namePattern = { pattern: "[A-Za-z\\s]+", title: "Letters only", onInput: onlyLetters };

export const phonePattern = {
  pattern: "[0-9]{10}",
  maxLength: 10,
  title: "Enter a 10-digit mobile number",
  onInput: onlyDigits,
};

const onlyLocationChars = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s,.\-]/g, "");
};

export const locationPattern = {
  pattern: "[A-Za-z][A-Za-z\s,.\-]+",
  minLength: 2,
  title: "Enter a valid project location (letters only)",
  onInput: onlyLocationChars,
};

// type="email" accepts "a@b"; require a real domain with a TLD.
export const emailPattern = {
  pattern: "[A-Za-z0-9._%+\-]+@[A-Za-z0-9\-]+(\.[A-Za-z0-9\-]+)*\.[A-Za-z]{2,}",
  title: "Enter a valid email address, e.g. name@example.com",
};
