export default function ParaClinicas() {
  const cards = [
    {
      title: "Clínicas médicas",
      bullets: ["Triagem inicial organizada", "Encaminha para a especialidade certa", "Agenda mais qualificada"]
    },
    {
      title: "Odontologia",
      bullets: ["Responde dúvidas frequentes", "Qualifica dor, urgência e estética", "Converte avaliação em agenda"]
    },
    {
      title: "Nutrição",
      bullets: ["Explica método e acompanhamento", "Filtra objetivo e disponibilidade", "Organiza primeira consulta"]
    },
    {
      title: "Estética",
      bullets: ["Tira dúvidas e reduz insegurança", "Filtra procedimento e indicação", "Agenda com clareza e confiança"]
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">
        Desenvolvido para clínicas e profissionais da saúde
      </h2>
      <p className="mt-3 max-w-2xl text-atMuted">
        Serviço premium. Implantação guiada. Atendimento humanizado com processos claros para aumentar agendamentos e reduzir ruído no WhatsApp.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-3xl border border-atBorder bg-atPanel p-6">
            <h3 className="text-base font-semibold">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-atMuted">
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-atBlue" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
