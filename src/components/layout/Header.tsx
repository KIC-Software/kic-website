import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/6 bg-[var(--logo-bg)]">
      <div className="flex min-h-26 w-full items-center justify-between gap-5 py-3 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="block">
          <Image
            src="/logo-header.png"
            alt="KIC Software"
            width={575}
            height={332}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <div className="flex items-center">
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-gray-200 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 transition-colors duration-200 hover:bg-[rgba(157,123,255,0.18)] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="button-secondary px-4 py-2 text-sm md:hidden"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
