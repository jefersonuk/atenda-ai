type Step = {
  n: string;
  title: string;
  desc: string;
  icon: string;
  highlight?: boolean;
};

const steps: Step[] = [
  { n: "1", title: "Paciente chega", desc: "WhatsApp ou Instagram, sem espera.", icon: "💬" },
  { n: "2", title: "Triagem", desc: "Objetivo, urgência e preferências do paciente.", icon: "🩺" },
  { n: "3", title: "Qualificação", desc: "Encaminha para o serviço certo com clareza.", icon: "✅" },
  {
    n: "4",
    title: "Briefing + Agendamento",
    desc: "Coleta informações e leva direto para a agenda do profissional.",
    icon: "📅",
    highlight: true,
  },
  { n: "5", title: "Confirmação", desc: "Orientações e detalhes antes do atendimento.", icon: "📩" },
  { n: "6", title: "Redução de faltas", desc: "Lembretes e reengajamento quando necessário.", icon: "🔁" },
];

function StepCard({ s }: { s: Step }) {
  const base =
    "rounded-3xl border p-6 min-h-[190px] flex flex-col justify-between transition";
  const normal =
    "border-atBorder bg-white/[0.04] hover:bg-white/[0.06]";
  const highlighted =
    "border-atGreen/40 bg-gradient-to-b from-atGreen/10 to-white/[0.03] ring-1 ring-atGreen/25 shadow-[0_0_60px_rgba(0,217,107,0.12)]";

  return (
    <div className={[base, s.highlight ? highlighted : normal].join(" ")}>
      <div>
        <div className="flex items-center gap-3">
          <div
            className={[
              "flex h-11 w-11 items-center justify-center rounded-2xl border",
              s.highlight ? "border-atGreen/35 bg-atGreen/10" : "border-atBorder bg-white/[0.03]",
            ].join(" ")}
          >
            <span className="text-lg">{s.icon}</span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={[
                  "inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold",
                  s.highlight ? "bg-atGreen/15 text-atText" : "bg-atBlue/12 text-atText",
                ].join(" ")}
              >
                {s.n}
              </span>

              <h3 className="text-[15px] font-medium tracking-[-0.01em] text-atText">
                {s.title}
              </h3>
            </div>

            <p className="mt-2 text-[14px] leading-relaxed text-atMuted">
              {s.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {s.highlight ? (
          <span className="inline-flex rounded-full border border-atGreen/30 bg-atGreen/10 px-3 py-1 text-[11px] text-atMuted">
            Etapa central do fluxo
          </span>
        ) : (
          <span className="inline-flex rounded-full border border-atBorder bg-white/[0.03] px-3 py-1 text-[11px] text-atMuted">
            Etapa {s.n}
          </span>
        )}
      </div>
    </div>
  );
}

export default function FluxoPaciente() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-10 lg:p-12">
        <h2 className="text-[34px] lg:text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-atText">
          Do primeiro contato à consulta confirmada
        </h2>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-atMuted">
          Um fluxo padronizado e humanizado que organiza o atendimento e conduz o paciente com segurança até a agenda.
        </p>

        {/* Desktop: timeline */}
        <div className="relative mt-10 hidden md:block">
          <div className="absolute left-0 right-0 top-[28px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                {/* ponto na linha */}
                <div className="flex justify-center">
                  <div
                    className={[
                      "relative z-10 h-3 w-3 rounded-full",
                      s.highlight ? "bg-atGreen" : "bg-atBlue",
                    ].join(" ")}
                  />
                </div>

                <div className="mt-6">
                  <StepCard s={s} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stack */}
        <div className="mt-10 grid gap-4 md:hidden">
          {steps.map((s) => (
            <StepCard key={s.n} s={s} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-atBorder bg-white/[0.03] p-6">
          <p className="text-[14px] leading-relaxed text-atMuted">
            Em saúde, a experiência precisa ser profissional e ética. A Atenda.ai organiza a jornada, reduz ruído e melhora previsibilidade de agenda.
          </p>
        </div>
      </div>
    </section>
  );
}
