import Link from "next/link";

const planos = [
  {
    title: "Implantação Essencial",
    badge: "1 canal",
    bullets: [
      "Mapeamento do fluxo de atendimento",
      "Triagem inicial e qualificação",
      "Briefing antes da agenda",
      "Tom de voz e regras da clínica"
    ]
  },
  {
    title: "Implantação Growth",
    badge: "multicanal",
    bullets: [
      "WhatsApp + Instagram",
      "Integração com CRM ou planilha",
      "Roteamento para setores",
      "Otimizações quinzenais"
    ]
  },
  {
    title: "Implantação Scale",
    badge: "clínicas maiores",
    bullets: [
      "Múltiplas unidades e equipes",
      "Governança e padrões",
      "Métricas de atendimento e qualificação",
      "Rotina de melhoria contínua"
    ]
  }
];

export default function Planos() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Modelos de implantação</h2>

      <p className="mt-3 max-w-2xl text-atMuted">
        Serviço premium com implantação guiada. Você não recebe só um bot. Você recebe um sistema.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {planos.map((p) => (
          <div key={p.title} className="rounded-3xl border border-atBorder bg-atPanel p-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-atMuted border border-atBorder">
                {p.badge}
              </span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-atMuted">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-atBlue" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/briefing"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-atBlue px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Quero uma implantação
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-atMuted">
        Observação: em saúde, seguimos limites éticos. O agente não diagnostica, não prescreve e não substitui julgamento clínico.
      </p>
    </section>
  );
}
