export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <span className="font-bold text-[#0F172A] text-lg tracking-tight">
              Contractor<span className="text-emerald-600"> Scale</span>
            </span>
            <p className="mt-2 text-sm text-[#111827]">
              Dedicated to helping high ticket trade contractors scale.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <a
              href="mailto:hello@contractorscale.co"
              className="text-sm text-[#111827] hover:text-emerald-600 transition-colors"
            >
              hello@contractorscale.co
            </a>
            <div className="flex gap-5 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-800 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-800 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-slate-400">
            © {year} Contractor Scale. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built for trade & commercial contractors.
          </p>
        </div>
      </div>
    </footer>
  );
}
