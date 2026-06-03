import Link from "next/link";

const services = [
  {
    label: "Websites & Web Apps",
    title: "Modern digital presence",
    description:
      "Fast, polished websites and web applications built for clarity, credibility, and conversion.",
    items: [
      "Marketing and company websites",
      "Landing pages and campaign sites",
      "Responsive, performance-focused builds",
    ],
  },
  {
    label: "UI Systems",
    title: "High-end interfaces",
    description:
      "Refined UI design and component systems that keep your product consistent as it grows.",
    items: [
      "Design systems and component libraries",
      "Product UI and interaction design",
      "Accessible, scalable interface patterns",
    ],
  },
  {
    label: "Business Tools",
    title: "Custom software",
    description:
      "Internal apps and admin tools tailored to how your team actually works.",
    items: [
      "Custom dashboards and internal apps",
      "Admin panels and operations tools",
      "Role-based workflows and permissions",
    ],
  },
  {
    label: "Automation",
    title: "Workflow integrations",
    description:
      "Connect your tools and remove manual steps so your team can focus on higher-value work.",
    items: [
      "Workflow automation and integrations",
      "API connections between platforms",
      "Notifications, triggers, and data sync",
    ],
  },
  {
    label: "Client Portals",
    title: "Self-service experiences",
    description:
      "Customer-facing tools that reduce admin load and give clients a smoother experience.",
    items: [
      "Client portals and account areas",
      "Booking and scheduling systems",
      "Document sharing and status tracking",
    ],
  },
  {
    label: "Data & Reporting",
    title: "Clear visibility",
    description:
      "Dashboards and reporting tools that turn scattered data into decisions you can act on.",
    items: [
      "Analytics dashboards and KPI views",
      "Custom reports and exports",
      "Data tools for teams and leadership",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your goals, users, and constraints so the solution fits the business—not just the brief.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We align on structure, UX, and visual direction before development so the build stays focused.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We develop with attention to performance, reliability, and long-term maintainability.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We help you ship confidently, then iterate and improve as your needs evolve.",
  },
];

export default function ServicesContent() {
  return (
    <>
      <section className="section-spacing">
        <div className="page-container">
          <div className="surface-panel p-8 sm:p-12 lg:p-16">
            <p className="inline-flex rounded-full border border-[var(--surface-border)] bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              What we do
            </p>

            <h1 className="heading-display mt-8 max-w-4xl">
              Services built for clarity, performance, and growth.
            </h1>

            <p className="text-muted mt-6 max-w-2xl text-base sm:text-lg">
              KIC Software designs and builds modern websites, streamlined
              interfaces, and custom business tools—focused on quality,
              usability, and long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="page-container">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Core services</h2>
            <p className="text-muted mt-3 text-base sm:text-lg">
              From public-facing websites to internal systems, we help teams
              ship software that feels polished and works reliably.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.label}
                className="rounded-2xl border border-[var(--surface-border)] bg-[linear-gradient(160deg,rgba(157,123,255,0.16),rgba(255,255,255,0.02))] p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                  {service.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-muted mt-3 text-sm">{service.description}</p>
                <ul className="text-muted mt-4 list-none space-y-2 text-sm">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="page-container">
          <div className="surface-panel p-8 sm:p-12">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">How we work</h2>
              <p className="text-muted mt-3 text-base sm:text-lg">
                A straightforward process that keeps projects moving without
                sacrificing quality.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    {step.step}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-3 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="page-container">
          <div className="surface-panel flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Ready to start a project?
              </h2>
              <p className="text-muted mt-3 text-base sm:text-lg">
                Tell us what you are building and we will help you shape the
                right solution.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact" className="button-primary text-center">
                Start a Project
              </Link>
              <Link href="/work" className="button-secondary text-center">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
