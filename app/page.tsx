"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Page() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  const validate = () => {
    if (!formState.name.trim()) {
      setError("Please provide your name.");
      return false;
    }

    if (!formState.email.trim()) {
      setError("Please provide an email address.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setError("Enter a valid email address.");
      return false;
    }

    if (!formState.message.trim()) {
      setError("Let us know how we can help you.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setStatus("loading");
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      resetForm();
    } catch (submitError) {
      console.error(submitError);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 lg:flex-row">
        <section className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Let&apos;s work together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg text-slate-300"
          >
            Share a few details and we&apos;ll tailor a response within one business day.
            Whether you need a bespoke workshop or one-to-one coaching, we&apos;re ready to
            support your next step.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-slate-200"
          >
            <li className="flex items-start gap-3">
              <span className="rounded-lg bg-slate-800/80 p-3 text-indigo-300">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">Email</p>
                <p className="font-medium">hello@careerconsultancy.co</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="rounded-lg bg-slate-800/80 p-3 text-indigo-300">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">Phone</p>
                <p className="font-medium">+44 20 7123 4567</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="rounded-lg bg-slate-800/80 p-3 text-indigo-300">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">Studio</p>
                <p className="font-medium">21 Shoreline Avenue, London</p>
              </div>
            </li>
          </motion.ul>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex-1 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur"
          aria-labelledby="contact-form"
        >
          <h2 id="contact-form" className="text-2xl font-semibold text-white">
            Contact our consultants
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            We&apos;ll use your details to prepare a tailored response with recommended next steps.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-200">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formState.name}
                onInput={handleChange}
                className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="Jordan Smith"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formState.email}
                onInput={handleChange}
                className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-200">
                Phone number <span className="text-slate-500">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formState.phone}
                onInput={handleChange}
                className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="+44 7123 456 789"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-200">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formState.message}
                onInput={handleChange}
                className="w-full rounded-xl border border-slate-700/60 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="Tell us about your goals, timeframe, and who we&apos;ll be working with."
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-emerald-300">
                Thank you! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && !error && (
              <p className="text-sm font-medium text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.section>
      </div>
    </main>
  );
}
