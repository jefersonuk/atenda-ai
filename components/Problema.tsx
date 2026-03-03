import Link from "next/link";

export default function Problema() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-3xl border border-atBorder bg-atPanel p-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Seu atendimento cresce. Seu time fica no limite.
        </h2>

        <p className="mt-4 max-w-3xl text-atMuted">
          Atraso no retorno derruba conversão. Perguntas repetidas consomem energia. Lead quente esfria.
          A Atenda.ai resolve o volume, qualifica e conduz para o próximo passo com um tom humanizado.
        </p>

        <div className="mt-8">
          <Link
            href="/briefing"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Quero melhorar a conversão
          </Link>
        </div>
      </div>
    </section>
  );
}
