import { ArrowRight, Quote } from "lucide-react";

const HEADSHOT = "/calvin-founder.png";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05] font-display uppercase">
            Make Your Trade & Construction Business the Top Choice for High Ticket Clients
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#111827] leading-relaxed max-w-2xl">
            We understand your business, and just as importantly, we understand the clients looking for your services. When a homeowner or commercial builder needs a trusted team for high-value concrete, roofing, or trade work, you want your business to be the one they find.
          </p>
          <div className="mt-10">
            <p className="text-xl sm:text-2xl font-bold tracking-tight font-display">
              <span className="text-emerald-600">They&apos;re already looking for you.</span>{" "}
              <span className="text-[#0F172A]">We just make you easier to find.</span>
            </p>
            <a
              href="#intake"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white transition-colors shadow-lg shadow-emerald-500/25"
            >
              Get Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          id="founder"
          className="mt-16 sm:mt-20 pt-12 border-t border-slate-200 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
        >
          <div className="lg:col-span-2">
            <img
              src={HEADSHOT}
              alt="Calvin, Founder of Contractor Scale"
              className="w-full max-w-xs mx-auto lg:mx-0 rounded-2xl border border-slate-200"
            />
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Meet the Founder
            </p>
            <Quote className="mt-4 h-7 w-7 text-emerald-600/70" />
            <div className="mt-4 text-lg text-[#111827] leading-relaxed space-y-5">
              <p>
                Hi, I&apos;m Calvin. Most trade and commercial contractors lose out on{" "}
                <span className="text-slate-900 font-semibold">$10k to $30k jobs</span> simply because their Google profile lacks recent reviews or their website makes getting a quote difficult.
              </p>
              <p>
                I personally partner with trade owners to fix their local search presence, automate review collection right after job completions, and build simple pages that turn visitors into phone calls.
              </p>
              <p>
                I build done-for-you lead generation engines: automating 5 star Google reviews, ranking your business locally, and building quote pages that convert calls into high ticket contracts.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img
                src={HEADSHOT}
                alt="Calvin"
                className="h-10 w-10 rounded-full border border-slate-200 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-slate-900">Calvin</p>
                <p className="text-xs text-[#111827]">Founder, Contractor Scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
