const steps = [
  {
    n: "1",
    title: "Paciente chega",
    desc: "WhatsApp ou Instagram, sem espera.",
    icon: "💬"
  },
  {
    n: "2",
    title: "Triagem",
    desc: "Motivo, urgência, preferências, convênio e disponibilidade.",
    icon: "🩺"
  },
  {
    n: "3",
    title: "Qualificação",
    desc: "Entende perfil e encaminha para o atendimento certo.",
    icon: "✅"
  },
  {
    n: "4",
    title: "Briefing + Agendamento",
    desc: "Coleta informações e leva direto para a agenda do profissional.",
    icon: "📅",
    highlight: true
  },
  {
    n: "5",
    title: "Confirmação",
    desc: "Mensagem clara, detalhes e orientações essenciais.",
    icon: "📩"
  },
  {
    n: "6",
    title: "Redução de faltas",
    desc: "Lembretes e reengajamento quando necessário.",
    icon: "🔁"
  }
];

export default function FluxoPaciente() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-atBorder bg-atPanel p-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Do primeiro contato à consulta confirmada
        </h2>

        <p className="mt-3 max-w-2xl text-atMuted">
          Um fluxo visual, padronizado e humanizado que organiza seu WhatsApp e conduz o paciente até a agenda com clareza.
        </p>

        {/* Desktop timeline */}
        <div className="relative mt-10 hidden md:block">
          {/* linha */}
          <div className="absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-6 gap-5">
            {steps.map((s, idx) => (
              <div key={s.n} className="relative">
                {/* ponto */}
                <div className="flex justify-center">
                  <div
                    className={[
                      "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border",
                      s.highlight
                        ? "border-atGreen/50 bg-atGreen/15 shadow-[0_0_0_6px_rgba(0,217,107,0.08)]"
                        : "border-atBorder bg-white/5"
                    ].join(" ")}
                  >
                    <span className="text-lg">{s.icon}</span>

                    {/* glow */}
                    <div
                      className={[
                        "absolute -inset-3 -z-10 rounded-full blur-xl opacity-60",
                        s.highlight ? "bg-atGreen/30" : "bg-atBlue/15"
                      ].join(" ")}
                    />
                  </div>
                </div>

                {/* card */}
                <div
  className={[
    "mt-5 rounded-3xl border p-6 transition",
    "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]",
    "min-h-[190px] flex flex-col justify-between",
    s.highlight
      ? "shadow-[0_0_60px_rgba(0,217,107,0.12)] ring-1 ring-atGreen/30"
      : "hover:bg-white/[0.06]"
  ].join(" ")}
>
  <div>
    <div className="flex items-center gap-2">
      <span
        className={[
          "inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold",
          s.highlight ? "bg-atGreen/15 text-atText" : "bg-atBlue/12 text-atText"
        ].join(" ")}
      >
        {s.n}
      </span>

      <h3 className="text-[15px] font-medium tracking-[-0.01em]">
        {s.title}
      </h3>
    </div>

    <p className="mt-3 text-[14px] leading-relaxed text-atMuted">
      {s.desc}
    </p>
  </div>

  {/* micro-label elegante, sem aumentar a altura */}
  {s.highlight ? (
    <div className="mt-5">
      <span className="inline-flex rounded-full border border-atGreen/30 bg-atGreen/10 px-3 py-1 text-[11px] text-atMuted">
        Ponto de virada do fluxo
      </span>
    </div>
  ) : (
    <div className="mt-5">
      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-atMuted">
        Etapa {s.n}
      </span>
    </div>
  )}
</div>

                {/* setinha sutil entre etapas */}
                {idx < steps.length - 1 ? (
                  <div className="pointer-events-none absolute right-[-10px] top-[36px] hidden xl:block">
                    <span className="text-white/20">➜</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {steps.map((s) => (
            <div
              key={s.n}
              className={[
                "rounded-2xl border p-5",
                s.highlight
                  ? "border-atGreen/40 bg-gradient-to-b from-atGreen/10 to-white/5"
                  : "border-atBorder bg-white/5"
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full border",
                    s.highlight ? "border-atGreen/50 bg-atGreen/15" : "border-atBorder bg-white/5"
                  ].join(" ")}
                >
                  <span className="text-lg">{s.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-atMuted">Etapa {s.n}</span>
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-atMuted">{s.desc}</p>
                  {s.highlight ? (
                    <p className="mt-3 text-xs text-atMuted">
                      Destaque: briefing e encaminhamento direto para agenda.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="mt-10 rounded-2xl border border-atBorder bg-white/5 p-6">
          <p className="text-sm text-atMuted">
            Para clínicas premium, o objetivo é reduzir ruído, responder rápido, qualificar com ética e manter o padrão de atendimento em todo contato.
          </p>
        </div>
      </div>
    </section>
  );
}
