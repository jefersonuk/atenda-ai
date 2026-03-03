export default function ProvaClinicas() {
  const depoimentos = [
    {
      nome: "Diretora de clínica",
      area: "Saúde",
      texto:
        "O WhatsApp ficou organizado. A triagem ficou mais clara e nossa equipe parou de perder tempo com perguntas repetidas."
    },
    {
      nome: "Gestora de consultório",
      area: "Odonto",
      texto:
        "A experiência do paciente melhorou e a agenda ficou mais previsível. A sensação é de atendimento profissional o tempo todo."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-atBorder bg-atPanel p-10 md:col-span-1">
          <h2 className="text-3xl font-semibold tracking-tight">Prova e previsibilidade</h2>
          <p className="mt-3 text-atMuted">
            Estruturamos o atendimento como um sistema. O objetivo é reduzir ruído e aumentar agendamentos qualificados.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
              <p className="text-xs text-atMuted">Resposta imediata</p>
              <p className="mt-1 text-lg font-semibold">sem espera</p>
            </div>
            <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
              <p className="text-xs text-atMuted">Triagem organizada</p>
              <p className="mt-1 text-lg font-semibold">menos ruído</p>
            </div>
            <div className="rounded-2xl border border-atBorder bg-white/5 p-4">
              <p className="text-xs text-atMuted">Agenda</p>
              <p className="mt-1 text-lg font-semibold">mais previsível</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
          {depoimentos.map((d) => (
            <div key={d.texto} className="rounded-3xl border border-atBorder bg-atPanel p-10">
              <p className="text-sm text-atText/90">“{d.texto}”</p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{d.nome}</p>
                <p className="text-xs text-atMuted">{d.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
