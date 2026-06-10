import Link from "next/link";

const values = [
  {
    label: "Quality first",
    title: "Built to last",
    description:
      "We write clean, maintainable code and design interfaces that hold up as your business grows—not just on launch day.",
  },
  {
    label: "Clarity",
    title: "No unnecessary complexity",
    description:
      "We cut through noise to deliver software that is easy to understand, easy to use, and aligned with real business goals.",
  },
  {
    label: "Partnership",
    title: "Collaborative from day one",
    description:
      "We work closely with your team, keep communication straightforward, and treat every project as a shared effort.",
  },
  {
    label: "Long-term value",
    title: "Software that scales with you",
    description:
      "We design systems with the future in mind—so you can iterate, expand, and adapt without starting over.",
  },
];

const highlights = [
  {
    label: "Focus",
    title: "Websites & business tools",
    description:
      "From marketing sites to internal dashboards, we build digital products that help teams work smarter and look sharper.",
  },
  {
    label: "Approach",
    title: "Practical and polished",
    description:
      "We balance thoughtful design with reliable engineering—delivering solutions that feel premium without overcomplicating the build.",
  },
];

export default function AboutContent() {
  return (
    <div className="section-spacing">
      <div className="page-container flex flex-col gap-16 sm:gap-20 lg:gap-24">
        <div className="surface-panel grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_280px] lg:items-center lg:p-16">
          <div>
            <p className="inline-flex rounded-full border border-[var(--surface-border)] bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              Who we are
            </p>

            <h1 className="heading-display mt-8 max-w-4xl">
              A digital product studio focused on clarity and craft.
            </h1>

            <p className="text-muted mt-6 max-w-2xl text-base sm:text-lg">
              KIC Software helps businesses grow with reliable, modern software
              solutions—from polished websites and interfaces to custom tools
              that streamline how teams work.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:-translate-y-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--surface-border)] bg-[linear-gradient(160deg,rgba(157,123,255,0.16),rgba(255,255,255,0.02))] p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                  {item.label}
                </p>
                <p className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-muted mt-3 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Our story</h2>
            <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
              KIC Software was founded on a simple belief: businesses deserve
              software that looks professional, works reliably, and actually fits
              how they operate. Too often, teams are stuck with outdated tools,
              fragmented workflows, or digital experiences that do not reflect
              the quality of their work.
            </p>
            <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
              We partner with growing businesses to close that gap—designing and
              building websites, web applications, and internal systems that
              bring clarity to complex processes and give teams the tools they
              need to move faster.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">What we stand for</h2>
            <p className="text-muted mt-3 text-base sm:text-lg">
              These principles guide every project we take on—from initial
              discovery through launch and beyond.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.label}
                className="rounded-2xl border border-[var(--surface-border)] bg-[linear-gradient(160deg,rgba(157,123,255,0.16),rgba(255,255,255,0.02))] p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
                  {value.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-muted mt-3 text-sm">{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-panel flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Let&apos;s build something together
            </h2>
            <p className="text-muted mt-3 text-base sm:text-lg">
              Whether you need a new website, a custom internal tool, or help
              modernizing an existing system—we would love to hear about it.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact" className="button-primary text-center">
              Get in Touch
            </Link>
            <Link href="/services" className="button-secondary text-center">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
