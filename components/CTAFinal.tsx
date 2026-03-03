import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-atendaBlack px-8 py-12 text-white">
        <h2 className="text-3xl font-semibold tracking-tight">Atenda melhor. Atenda sempre.</h2>

        <p className="mt-3 max-w-2xl text-white/80">
          Preencha um briefing rápido e fale com Patrick ou Jeferson. A reunião é de 30 minutos.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/briefing"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-atendaBlack hover:opacity-90 transition"
          >
            Falar com especialista
          </Link>

          <Link
            href="#faq"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Tirar dúvidas
          </Link>
        </div>
      </div>
    </section>
  );
}
