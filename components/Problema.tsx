import Link from "next/link";

export default function Problema() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="rounded-3xl border bg-white p-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Seu atendimento está crescendo. Seu time não.
        </h2>

        <p className="mt-4 text-atendaGray max-w-3xl">
          Volume explode, respostas atrasam, oportunidades se perdem. A Atenda.ai não substitui pessoas. Ela amplifica o impacto delas.
        </p>

        <div className="mt-8">
          <Link
            href="/briefing"
            className="inline-flex items-center justify-center rounded-xl bg-atendaBlack px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Quero resolver isso
          </Link>
        </div>
      </div>
    </section>
  );
}
