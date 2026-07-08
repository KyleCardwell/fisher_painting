"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

const serviceOptions = [
  "Interior Painting",
  "Exterior Coatings",
  "Plaster Coatings",
  "Stain & Transparent Coatings",
  "Wallcoverings",
  "Other",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  serviceNeeded: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeout = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timeout);
  }, [toast]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      setToast({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your message.");
      }

      setFormData(initialFormData);
      setErrors({});
      setToast({ type: "success", message: payload.message || "Message sent successfully." });
    } catch (error) {
      setToast({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {toast ? (
        <div
          className={`mb-4 rounded-lg px-4 py-3 text-sm font-medium ${
            toast.type === "success"
              ? "bg-emerald-100 text-emerald-900"
              : "bg-red-100 text-red-900"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
            Name <span className="text-red-600">(Required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="h-14 w-full border border-[#d9d9d9] px-4 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
              Email <span className="text-red-600">(Required)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="h-14 w-full border border-[#d9d9d9] px-4 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
              Phone <span className="text-red-600">(Required)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="h-14 w-full border border-[#d9d9d9] px-4 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
            />
          </div>
        </div>

        {/* <div>
          <label htmlFor="serviceNeeded" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
            Service Needed
          </label>
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={handleChange}
            className="h-14 w-full border border-[#d9d9d9] px-4 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div> */}

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
            Message <span className="text-red-600">(Required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-[#d9d9d9] px-4 py-3 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
          />
          {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="red"
          className="text-base disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
