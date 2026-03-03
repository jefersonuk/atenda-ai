const steps = [
  { n: "1", title: "Paciente chega", desc: "WhatsApp ou Instagram, sem espera." },
  { n: "2", title: "Triagem", desc: "Motivo, urgência, preferências, convênio e disponibilidade." },
  { n: "3", title: "Qualificação", desc: "Entende perfil e encaminha para o atendimento certo." },
  { n: "4", title: "Agendamento", desc: "Conduz para o briefing e para a agenda do profissional." },
  { n: "5", title: "Confirmação", desc: "Mensagem clara, detalhes e orientações essenciais." },
  { n: "6", title: "Redução de faltas", desc: "Lembretes e reengajamento quando necessário." }
];

export default function FluxoPaciente() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-atBorder bg-atPanel p-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Do primeiro contato à consulta confirmada
        </h2>
        <p className="mt-3 max-w-2xl text-atMuted">
          Você para de “apagar incêndio” no WhatsApp. A Atenda.ai organiza o fluxo e leva o paciente para o próximo passo com clareza.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-atBorder bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-atBlue/20 text-sm font-semibold text-atText">
                  {s.n}
                </div>
                <h3 className="text-base font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-atMuted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
