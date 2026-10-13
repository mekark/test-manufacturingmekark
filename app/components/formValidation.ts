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
