export default function Beneficios() {
  const items = [
    {
      title: "Resposta imediata com padrão",
      desc: "Reduz o tempo de resposta e mantém um atendimento profissional em todo contato.",
    },
    {
      title: "Triagem que qualifica",
      desc: "Organiza motivo, urgência e preferência, encaminhando para o serviço certo.",
    },
    {
      title: "Agenda mais previsível",
      desc: "Conduz o paciente para briefing e agendamento com clareza e menos fricção.",
    },
    {
      title: "Equipe com menos ruído",
      desc: "Menos perguntas repetidas e mais foco no que realmente precisa de humano.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-[34px] lg:text-[38px] font-semibold leading-[1.1] tracking-[-0.03em] text-atText">
        O que muda na rotina da clínica
      </h2>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-atMuted">
        Serviço premium com implantação guiada. Resultado prático no atendimento, sem promessas exageradas.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
          >
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-atText">
              {i.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-atMuted">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
