import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-atendaGray">
            Atenda.ai • IA conversacional para atendimento e conversão
          </p>

          <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight">
            ATENDIMENTO INTELIGENTE <br />
            <span className="text-atendaBlue">QUE REALMENTE RESOLVE</span>
          </h1>

          <p className="mt-6 text-lg text-atendaGray">
            IA conversacional brasileira que automatiza até 89% do atendimento em 30 dias, com resposta em segundos e integração total ao seu funil.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/briefing"
              className="bg-atendaBlue text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition text-center"
            >
              Falar com especialista
            </Link>

            <Link
              href="#como-funciona"
              className="border border-atendaBlue text-atendaBlue px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition text-center"
            >
              Ver como funciona
            </Link>
          </div>

          <div className="mt-8 text-sm text-atendaGray flex flex-wrap gap-6">
            <span>⭐ 4,7/5</span>
            <span>+150 empresas</span>
            <span>TMR médio 8s</span>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-atendaBlue to-atendaGreen p-1">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <p className="font-mono text-xs text-gray-500">
              STATUS: 200_OK • TMR: 8.4s
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-100 p-3 rounded-xl">Cliente: Quero saber valores.</div>
              <div className="bg-atendaBlue text-white p-3 rounded-xl ml-auto max-w-[80%]">
                Claro. Posso te fazer 3 perguntas rápidas?
              </div>
              <div className="bg-gray-100 p-3 rounded-xl">Cliente: Pode sim.</div>
              <div className="bg-atendaGreen text-white p-3 rounded-xl ml-auto max-w-[80%]">
                Perfeito. Qual é seu segmento e por onde chegam mais clientes hoje?
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border p-3">
                <p className="text-xs text-atendaGray">Resolução</p>
                <p className="text-base font-semibold text-atendaBlack">89%</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-atendaGray">Uptime</p>
                <p className="text-base font-semibold text-atendaBlack">99.9%</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-atendaGray">LGPD</p>
                <p className="text-base font-semibold text-atendaBlack">Nativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
