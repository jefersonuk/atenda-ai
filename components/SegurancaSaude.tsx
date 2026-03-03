export default function SegurancaSaude() {
  const itens = [
    {
      title: "Não prescreve, não diagnostica",
      desc: "O agente não substitui julgamento clínico. Ele organiza atendimento e encaminha o paciente."
    },
    {
      title: "Dados sensíveis com cuidado",
      desc: "Coletamos somente o necessário para triagem e briefing, com postura LGPD e boas práticas."
    },
    {
      title: "Tom humano e profissional",
      desc: "Sem agressividade. Sem promessas indevidas. Comunicação alinhada à sua clínica."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">
        Segurança, ética e confiança no atendimento
      </h2>
      <p className="mt-3 max-w-2xl text-atMuted">
        Em saúde, confiança é o ativo principal. A Atenda.ai é desenhada para respeitar limites, reduzir riscos e manter o padrão de excelência.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {itens.map((i) => (
          <div key={i.title} className="rounded-3xl border border-atBorder bg-atPanel p-8">
            <h3 className="text-base font-semibold">{i.title}</h3>
            <p className="mt-3 text-sm text-atMuted">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
