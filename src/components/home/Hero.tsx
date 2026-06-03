import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-spacing">
      <div className="page-container">
        <div className="surface-panel grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_280px] lg:items-center lg:p-16">
          <div>
            <p className="inline-flex rounded-full border border-[var(--surface-border)] bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              Digital Product Studio
            </p>

            <h1 className="heading-display mt-8 max-w-4xl">
              Websites and software systems designed to help businesses
              grow.
            </h1>

            <p className="text-muted mt-6 max-w-2xl text-base sm:text-lg">
              KIC Software designs and builds modern websites, streamlined
              interfaces, and custom business tools focused on clarity,
              performance, and long-term value.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary text-center">
                Start a Project
              </Link>
              <Link href="/work" className="button-secondary text-center">
                View Work
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:-translate-y-2">
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[linear-gradient(160deg,rgba(157,123,255,0.16),rgba(255,255,255,0.02))] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                Built for growth
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">High-end UI</p>
              <p className="text-muted mt-3 text-sm">
                Refined interfaces and fast, reliable software crafted for teams
                that care about quality.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--surface-border)] bg-[linear-gradient(160deg,rgba(157,123,255,0.16),rgba(255,255,255,0.02))] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                What we build
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">Business tools</p>
              <ul className="text-muted mt-3 list-none space-y-2 text-sm">
                <li>Custom dashboards and internal apps</li>
                <li>Workflow automation and integrations</li>
                <li>Client portals and booking systems</li>
                <li>Data tools, reporting, and admin panels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}