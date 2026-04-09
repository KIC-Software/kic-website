import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-semibold">KIC Software</div>

      <nav className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
