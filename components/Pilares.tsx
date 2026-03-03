const pilares = [
  { title: "Atende agora", desc: "Resposta em segundos", kpi: "TMR 8s" },
  { title: "Atende direito", desc: "IA treinada em PT-BR", kpi: "89% resolução" },
  { title: "Atende viável", desc: "Redução de custo", kpi: "ROI em 90 dias" },
  { title: "Atende seguro", desc: "LGPD nativo", kpi: "0 incidentes" },
  { title: "Atende escalável", desc: "De 10 a 10k conversas", kpi: "Uptime 99.9%" }
];

export default function Pilares() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Os 5 pilares da Atenda.ai</h2>
      <p className="mt-3 max-w-2xl text-atendaGray">
        Direto ao ponto. O que você precisa para atender bem, sempre.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-5">
        {pilares.map((p) => (
          <div key={p.title} className="rounded-2xl border p-6">
            <h3 className="text-base font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-atendaGray">{p.desc}</p>
            <p className="mt-6 font-mono text-xs text-atendaBlack">{p.kpi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
