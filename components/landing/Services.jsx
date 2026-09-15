import { Star, FileText, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Automated Review Collection",
    desc: "Send SMS review links automatically when a job is marked complete. Every finished project becomes a fresh 5 star review on Google. No follow up calls, no chasing.",
  },
  {
    icon: FileText,
    title: "High Converting Contractor Pages",
    desc: "Fast, mobile friendly landing pages built to capture instant job quote requests. Clean layout, clear call to action, built to turn visitors into phone calls.",
  },
  {
    icon: MapPin,
    title: "Google Map Pack Ranking",
    desc: "Claim and optimize your Google Business Profile to rank in the top local search results. We handle photos, categories, service areas, and review velocity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Our System
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] font-display">
            Three things that win you local jobs.
          </h2>
          <p className="mt-4 text-[#111827] leading-relaxed">
            No bloated software stack. Just the exact systems that put your business in front of ready-to-buy homeowners and commercial clients.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-slate-300/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-mono text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm text-[#111827] leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="#intake"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white transition-colors shadow-lg shadow-emerald-500/25"
          >
            Book your free audit
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
