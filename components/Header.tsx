import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-atBorder bg-atBg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Atenda<span className="text-atBlue">.ai</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-atMuted md:flex">
          <Link href="#como-funciona" className="hover:text-atText">Como funciona</Link>
          <Link href="#planos" className="hover:text-atText">Planos</Link>
          <Link href="#faq" className="hover:text-atText">FAQ</Link>
        </nav>

        <Link
          href="/briefing"
          className="inline-flex items-center justify-center rounded-xl bg-atBlue px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Falar com especialista
        </Link>
      </div>
    </header>
  );
}
