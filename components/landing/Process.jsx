const steps = [
  {
    num: "01",
    title: "30 Minute Audit & Setup",
    desc: "We evaluate your local profile and map out your custom review & quote flow. No pressure, no jargon. Just a clear plan for what's costing you jobs right now.",
  },
  {
    num: "02",
    title: "Launch Review Automation",
    desc: "We connect automated SMS review requests to your finished job list. The moment a job closes out, your customer gets a friendly text asking for a review.",
  },
  {
    num: "03",
    title: "Receive Inbound Quotes",
    desc: "With a growing review profile and a clean quote page, high-value job leads start coming to you, sent directly to your phone and email.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Why Us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] font-display">
            A simple, honest process.
          </h2>
          <p className="mt-4 text-[#111827] leading-relaxed">
            No 90 day onboarding. No complex dashboards. Three steps from first call to inbound quotes.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative rounded-2xl border border-slate-200 bg-white p-7"
            >
              <span className="text-sm font-mono text-emerald-600">{s.num}</span>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent" />
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm text-[#111827] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
