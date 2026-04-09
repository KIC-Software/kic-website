export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="page-container flex items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
        <p>© {new Date().getFullYear()} KIC Software</p>
        <p className="hidden sm:block">Built for modern digital growth</p>
      </div>
    </footer>
  );
}