"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

const maxResumeSize = 20 * 1024 * 1024;

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
  captcha: false,
  resume: null,
};

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (values.resume && values.resume.size > maxResumeSize) {
    errors.resume = "Resume must be 20 MB or smaller.";
  }

  if (!values.captcha) {
    errors.captcha = "Please complete the CAPTCHA.";
  }

  return errors;
}

export default function CareersApplicationForm() {
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
    const { checked, files, name, type, value } = event.target;
    const nextValue = type === "checkbox" ? checked : type === "file" ? files?.[0] || null : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
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

      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);
      payload.append("website", formData.website);
      payload.append("captcha", formData.captcha ? "true" : "false");

      if (formData.resume) {
        payload.append("resume", formData.resume);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your application.");
      }

      event.currentTarget.reset();
      setFormData(initialFormData);
      setErrors({});
      setToast({ type: "success", message: result.message || "Application sent successfully." });
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
            toast.type === "success" ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="careers-website">This field is for validation purposes and should be left unchanged.</label>
          <input
            id="careers-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="careers-name" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
            Name <span className="text-red-600">(Required)</span>
          </label>
          <input
            id="careers-name"
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
            <label htmlFor="careers-email" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
              Email Address <span className="text-red-600">(Required)</span>
            </label>
            <input
              id="careers-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="h-14 w-full border border-[#d9d9d9] px-4 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="careers-phone" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
              Phone Number <span className="text-red-600">(Required)</span>
            </label>
            <input
              id="careers-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="h-14 w-full border border-[#d9d9d9] px-4 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
            />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="careers-message" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
            Message
          </label>
          <textarea
            id="careers-message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-[#d9d9d9] px-4 py-3 text-base outline-none transition focus:border-fisherRed focus:ring-2 focus:ring-fisherRed/15"
          />
        </div>

        <div>
          <label htmlFor="careers-resume" className="mb-2 block text-sm font-semibold text-[#1C1D1E]">
            Resume
          </label>
          <input
            id="careers-resume"
            name="resume"
            type="file"
            onChange={handleChange}
            className="block h-14 w-full cursor-pointer border border-[#d9d9d9] text-base text-[#676767] file:mr-4 file:h-full file:border-0 file:bg-[#f5f5f5] file:px-4 file:text-sm file:font-semibold file:text-[#1C1D1E] hover:file:bg-[#ededed] focus:outline-none focus:ring-2 focus:ring-fisherRed/15"
          />
          <p className="mt-2 text-sm text-[#676767]">Max. file size: 20 MB.</p>
          {errors.resume ? <p className="mt-1 text-xs text-red-600">{errors.resume}</p> : null}
        </div>

        <div>
          <p className="mb-2 block text-sm font-semibold text-[#1C1D1E]">CAPTCHA</p>
          <label className="flex min-h-14 items-center gap-3 border border-[#d9d9d9] px-4 text-base text-[#1C1D1E]">
            <input
              name="captcha"
              type="checkbox"
              checked={formData.captcha}
              onChange={handleChange}
              className="h-5 w-5 accent-fisherRed"
            />
            I am not a robot
          </label>
          {errors.captcha ? <p className="mt-1 text-xs text-red-600">{errors.captcha}</p> : null}
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
