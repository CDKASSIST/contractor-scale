"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const trades = [
  "Concreting",
  "HVAC",
  "Roofing",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Other",
];

const bottlenecks = [
  "Not enough reviews",
  "Not ranking on Google Maps",
  "Website isn't getting quotes",
  "All of the above",
];

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
const calendlySrc = calendlyUrl
  ? `${calendlyUrl}${calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=ffffff&primary_color=10b981`
  : "";

export default function IntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    business: "",
    trade: "",
    bottleneck: "",
  });

  const total = 4;
  const next = () => setStep((s) => Math.min(total - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const canNext =
    (step === 0 && data.business.trim().length > 1) ||
    (step === 1 && data.trade) ||
    (step === 2 && data.bottleneck) ||
    step === 3;

  const progress = ((step + 1) / total) * 100;

  return (
    <section id="intake" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Book Your Audit
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] font-display">
            Let&apos;s see where you&apos;re losing jobs.
          </h2>
          <p className="mt-4 text-[#111827] leading-relaxed">
            Pick a time below for your 30 minute audit.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-300/30">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-slate-400">
              Step {step + 1} of {total}
            </span>
            <div className="flex-1 mx-4 h-1.5 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {step === 0 && (
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">
                What&apos;s your business name?
              </label>
              <input
                type="text"
                value={data.business}
                onChange={(e) => setData({ ...data, business: e.target.value })}
                placeholder="e.g. Summit Concrete Co."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none"
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="text-sm font-medium text-[#111827] mb-3">
                What&apos;s your primary trade?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {trades.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setData({ ...data, trade: t })}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                      data.trade === t
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-slate-300 text-[#111827] hover:border-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm font-medium text-[#111827] mb-3">
                What&apos;s your biggest bottleneck right now?
              </p>
              <div className="space-y-2">
                {bottlenecks.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setData({ ...data, bottleneck: b })}
                    className={`w-full text-left rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      data.bottleneck === b
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-slate-300 text-[#111827] hover:border-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <p className="text-sm text-slate-700">
                  Thanks{data.business ? `, ${data.business}` : ""}. Pick a time below.
                </p>
              </div>
              <div className="rounded-xl border border-slate-300 bg-white p-2 sm:p-4 overflow-hidden">
                {calendlySrc ? (
                  <iframe
                    src={calendlySrc}
                    title="Book your 30 minute audit"
                    className="w-full h-[640px] rounded-lg border-0"
                  />
                ) : (
                  <p className="px-4 py-16 text-center text-sm text-slate-600">
                    Add your Calendly event URL to{" "}
                    <code className="font-mono text-slate-800">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
                    in <code className="font-mono text-slate-800">.env.local</code>, then restart the
                    dev server.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={!canNext}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-sm shadow-emerald-500/25"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
