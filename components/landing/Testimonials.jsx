const reviews = [
  {
    name: "Dave M.",
    role: "Commercial Concreting",
    initials: "D",
    color: "#1a73e8",
    time: "2 weeks ago",
    business: "Summit Concrete Co.",
    text: "Before setting up the review automation, we had satisfied clients but zero Google reviews. Within 30 days of launching, we collected 18 verified five star reviews and booked two commercial slab jobs directly from local search.",
  },
  {
    name: "Jason T.",
    role: "Commercial HVAC",
    initials: "J",
    color: "#ea4335",
    time: "1 month ago",
    business: "ArcticAir Mechanical",
    text: "The custom quote page changed everything for us. Prospects actually submit job details and site photos before calling, which means our sales team only spends time on serious commercial buyers.",
  },
  {
    name: "Marcus R.",
    role: "Apex Roofing & Build",
    initials: "M",
    color: "#34a853",
    time: "3 weeks ago",
    business: "Apex Roofing & Build",
    text: "Calvin's team fixed our local search presence and automated our follow ups. We went from losing local leads to competitors to holding the top map pack spot in our region.",
  },
  {
    name: "Sarah L.",
    role: "ProFlow Plumbing",
    initials: "S",
    color: "#fbbc04",
    time: "5 days ago",
    business: "ProFlow Plumbing",
    text: "Trenchless pipe replacement for a multi unit complex got booked through their quote page within 24 hours of posting our first batch of reviews. The whole system just works.",
  },
  {
    name: "Tony V.",
    role: "Voltcore Electrical",
    initials: "T",
    color: "#1a73e8",
    time: "2 months ago",
    business: "Voltcore Electrical",
    text: "We now rank number one on Google Maps for commercial electricians in our zone. The review automation brings in fresh five star feedback every single week without us lifting a finger.",
  },
  {
    name: "Brendan K.",
    role: "GroundLine Earthworks",
    initials: "B",
    color: "#ea4335",
    time: "3 weeks ago",
    business: "GroundLine Earthworks",
    text: "From barely showing up online to a steady stream of inbound commercial enquiries. The quote page alone paid for the whole setup in one single job. Wish we had done this years ago.",
  },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.15 15.9-5.82l-7.73-6c-2.16 1.45-4.93 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="#fbbc04"
            d="M12 17.27l5.18 3.12-1.37-5.88 4.55-3.94-5.99-.51L12 4.5 9.63 9.73l-5.99.51 4.55 3.94-1.37 5.88z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-10">
          <GoogleG />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Client & Partner Testimonials
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-display">
              Proven Results From the Field
            </h2>
          </div>
        </div>
        <p className="text-[#111827] leading-relaxed max-w-2xl mb-10">
          See how trade & construction contractors use our system to secure high ticket jobs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm shadow-slate-300/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#202124]">{r.name}</p>
                    <p className="text-xs text-[#5f6368]">{r.role}</p>
                  </div>
                </div>
                <GoogleG />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Stars />
                <span className="text-xs text-[#5f6368]">{r.time}</span>
              </div>
              <p className="mt-3 text-sm text-[#3c4043] leading-relaxed">{r.text}</p>
              <p className="mt-4 pt-3 border-t border-slate-200 text-xs font-medium text-[#5f6368]">
                {r.business}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
