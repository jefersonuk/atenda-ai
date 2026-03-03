import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-atBorder bg-atBg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-[16px] font-semibold tracking-[-0.02em] text-atText">
          Atenda<span className="text-atBlue">.ai</span>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] text-atMuted md:flex">
          <Link href="#como-funciona" className="hover:text-atText transition">
            Fluxo
          </Link>
          <Link href="#planos" className="hover:text-atText transition">
            Implantação
          </Link>
          <Link href="#faq" className="hover:text-atText transition">
            FAQ
          </Link>
        </nav>

        <Link
          href="/briefing"
          className="inline-flex items-center justify-center rounded-xl bg-atBlue px-4 py-2 text-[13px] font-semibold text-white shadow-[0_12px_40px_rgba(0,102,255,0.18)] hover:opacity-90 transition"
        >
          Falar com especialista
        </Link>
      </div>
    </header>
  );
}
