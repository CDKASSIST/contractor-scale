"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is review automation safe for my Google Business Profile?",
    a: "Yes. We never buy reviews or use fake accounts. We simply send a polite SMS to real customers after a job is complete, asking them to share their honest experience. This is fully within Google's guidelines and is the most effective way to build genuine review velocity.",
  },
  {
    q: "Do I need a new website?",
    a: "Not necessarily. If your current site gets quotes, we'll work with it. If not, we'll build a simple, mobile friendly quote page that's designed to convert visitors into phone calls. No bloated redesign required.",
  },
  {
    q: "How fast can we be live?",
    a: "Most clients are fully set up within 5 to 7 days. The 30 minute audit happens first, then we handle Google Business Profile optimization, SMS automation, and your quote page build.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. We work month to month. If we're not earning our keep, you're free to leave. We'd rather keep you with results than a contract.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] font-display">
            Straight answers.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-slate-900">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  ) : (
                    <Plus className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-[#111827] leading-relaxed">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
