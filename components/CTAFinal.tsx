import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 lg:p-12">
        <h2 className="text-[34px] lg:text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-atText">
          Atenda melhor. Atenda sempre.
        </h2>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-atMuted">
          Preencha um briefing rápido e fale com Patrick ou Jeferson. A reunião é de 30 minutos.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/briefing"
            className="inline-flex items-center justify-center rounded-xl bg-atBlue px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_45px_rgba(0,102,255,0.18)] hover:opacity-90 transition"
          >
            Falar com especialista
          </Link>

          <Link
            href="#faq"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-[14px] font-semibold text-atText hover:bg-white/[0.06] transition"
          >
            Tirar dúvidas
          </Link>
        </div>
      </div>
    </section>
  );
}
