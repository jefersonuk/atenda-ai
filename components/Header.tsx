import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Atenda<span className="text-atendaBlue">.ai</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-atendaGray md:flex">
          <Link href="#como-funciona" className="hover:text-atendaBlack">
            Como funciona
          </Link>
          <Link href="#planos" className="hover:text-atendaBlack">
            Planos
          </Link>
          <Link href="#faq" className="hover:text-atendaBlack">
            FAQ
          </Link>
        </nav>

        <Link
          href="/briefing"
          className="inline-flex items-center justify-center rounded-xl bg-atendaBlue px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Falar com especialista
        </Link>
      </div>
    </header>
  );
}
