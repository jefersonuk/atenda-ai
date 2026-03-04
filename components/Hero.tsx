import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow sutil */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-atBlue/20 blur-3xl" />
        <div className="absolute top-10 right-[-140px] h-[520px] w-[520px] rounded-full bg-atGreen/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14">
        {/* Header strip (prova social imediata) */}
        <div className="inline-flex items-center gap-3 rounded-full border border-atBorder bg-atPanel px-4 py-2 text-[13px] text-atMuted">
          <span className="inline-flex h-2 w-2 rounded-full bg-atGreen" />
          <span className="font-medium text-atText/90">Implantação premium para clínicas</span>
          <span className="text-atMuted">|</span>
          <span>WhatsApp organizado</span>
          <span className="text-atMuted">•</span>
          <span>triagem</span>
          <span className="text-atMuted">•</span>
          <span>agenda mais previsível</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-[42px] leading-[1.05] font-semibold tracking-[-0.03em] text-atText">
              Transforme o atendimento da sua clínica em um{" "}
              <span className="text-atBlue">sistema</span> que{" "}
              <span className="text-atGreen">qualifica e agenda</span>.
            </h1>

            <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-atMuted">
              Atendimento com IA humanizada e processos claros para reduzir ruído no WhatsApp,
              organizar triagem e conduzir o paciente até a consulta com segurança e ética.
            </p>

            {/* 2 CTAs (igual lógica VipPhone) */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/briefing"
                className="inline-flex items-center justify-center rounded-xl bg-atBlue px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_45px_rgba(0,102,255,0.18)] hover:opacity-90 transition"
              >
                Falar com especialista
              </Link>

              <Link
                href="#fluxo"
                className="inline-flex items-center justify-center rounded-xl border border-atBorder bg-atPanel px-6 py-3 text-[14px] font-semibold text-atText hover:bg-white/10 transition"
              >
                Ver como funciona
              </Link>
            </div>

            {/* bullets curtos (clareza de oferta) */}
            <div className="mt-8 grid gap-3 text-[14px] text-atMuted">
              <div className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-atGreen" />
                <span>Triagem e qualificação sem sobrecarregar recepção</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-atGreen" />
                <span>Briefing antes da consulta com dados organizados</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-atGreen" />
                <span>Condução ética, tom humano e padrão de excelência</span>
              </div>
            </div>
          </div>

          {/* Card visual (sem exagero) */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
            <div className="flex items-center justify-between text-[12px] text-atMuted font-mono">
              <span>ATENDIMENTO: ONLINE</span>
              <span>RESPOSTA: IMEDIATA</span>
            </div>

            <div className="mt-5 space-y-3 text-[14px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-atText/90">
                Paciente: Quero agendar, mas tenho dúvidas.
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl bg-atBlue p-4 text-white">
                Claro. Posso te fazer 3 perguntas rápidas para te encaminhar corretamente?
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-atText/90">
                Paciente: Pode sim.
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl bg-atGreen p-4 text-white">
                Perfeito. Qual é o objetivo e qual período do dia você prefere para consulta?
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { t: "Triagem", v: "organizada" },
                { t: "Equipe", v: "menos ruído" },
                { t: "Agenda", v: "previsível" },
              ].map((k) => (
                <div key={k.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[12px] text-atMuted">{k.t}</p>
                  <p className="mt-1 text-[14px] font-semibold text-atText">{k.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
