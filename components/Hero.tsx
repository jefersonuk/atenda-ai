import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-atBlue/25 blur-3xl" />
        <div className="absolute top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-atGreen/18 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-160px] h-[520px] w-[520px] rounded-full bg-atPurple/16 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-atBorder bg-atPanel px-3 py-1 text-xs text-atMuted">
              Serviço premium de implantação para clínicas
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight">
              Transforme o WhatsApp da sua clínica em um{" "}
              <span className="text-atBlue">sistema de atendimento</span> que organiza, qualifica e{" "}
              <span className="text-atGreen">agenda</span>.
            </h1>

            <p className="mt-6 text-lg text-atMuted">
              A Atenda.ai estrutura seu atendimento com IA humanizada, triagem inteligente e condução para o próximo passo.
              Você ganha previsibilidade, sua equipe ganha tempo e o paciente ganha experiência.
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
                Ver o fluxo do paciente
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-atMuted">
              <div className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-atGreen" />
                <span>Triagem e qualificação sem sobrecarregar recepção</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-atGreen" />
                <span>Briefing do paciente antes da consulta, com clareza e organização</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-atGreen" />
                <span>Condução ética, com tom humano e alinhado à sua clínica</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-atBorder bg-atPanel p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-atMuted">ATENDIMENTO: ONLINE</p>
              <p className="font-mono text-xs text-atMuted">RESPOSTA: IMEDIATA</p>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-xl bg-white/5 p-3 text-atText/90">
                Paciente: Quero agendar, mas tenho dúvidas.
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl bg-atBlue p-3 text-white">
                Claro. Posso te fazer 3 perguntas rápidas para te encaminhar corretamente?
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-atText/90">
                Paciente: Pode sim.
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl bg-atGreen p-3 text-white">
                Perfeito. Qual é o principal objetivo e qual período do dia você prefere para consulta?
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
                <p className="text-xs text-atMuted">Triagem</p>
                <p className="mt-1 text-lg font-semibold">organizada</p>
              </div>
              <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
                <p className="text-xs text-atMuted">Equipe</p>
                <p className="mt-1 text-lg font-semibold">menos ruído</p>
              </div>
              <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
                <p className="text-xs text-atMuted">Agenda</p>
                <p className="mt-1 text-lg font-semibold">previsível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
