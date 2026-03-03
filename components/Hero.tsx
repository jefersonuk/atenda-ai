import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-atBlue/25 blur-3xl" />
        <div className="absolute top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-atGreen/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-160px] h-[520px] w-[520px] rounded-full bg-atPurple/18 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-atBorder bg-atPanel px-3 py-1 text-xs text-atMuted">
              Conversão. Conversão. Conversão. Tecnologia aplicada ao seu atendimento.
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight">
              Atendimento com IA que <span className="text-atBlue">parece humano</span> e
              <span className="text-atGreen"> converte</span>.
            </h1>

            <p className="mt-6 text-lg text-atMuted">
              Agentes de atendimento por IA para empresas que precisam responder em segundos,
              qualificar leads e conduzir o cliente até a ação, sem perder o toque humano.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/briefing"
                className="rounded-xl bg-atBlue px-6 py-3 text-center text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Falar com especialista
              </Link>

              <Link
                href="#como-funciona"
                className="rounded-xl border border-atBorder bg-atPanel px-6 py-3 text-center text-sm font-semibold text-atText hover:bg-white/10 transition"
              >
                Ver como funciona
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-atMuted">
              <span>Resposta em segundos</span>
              <span>Qualificação automática</span>
              <span>Integração com seu funil</span>
            </div>
          </div>

          <div className="rounded-3xl border border-atBorder bg-atPanel p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-atMuted">STATUS: 200_OK</p>
              <p className="font-mono text-xs text-atMuted">TMR: 8.4s</p>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-xl bg-white/5 p-3 text-atText/90">
                Cliente: Quero saber valores e como funciona.
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl bg-atBlue p-3 text-white">
                Perfeito. Posso te fazer 3 perguntas rápidas para te indicar a melhor opção?
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-atText/90">
                Cliente: Pode sim.
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl bg-atGreen p-3 text-white">
                Qual é seu segmento e por onde chegam mais clientes hoje?
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
                <p className="text-xs text-atMuted">Resolução</p>
                <p className="mt-1 text-lg font-semibold">89%</p>
              </div>
              <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
                <p className="text-xs text-atMuted">Uptime</p>
                <p className="mt-1 text-lg font-semibold">99.9%</p>
              </div>
              <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
                <p className="text-xs text-atMuted">LGPD</p>
                <p className="mt-1 text-lg font-semibold">Nativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
