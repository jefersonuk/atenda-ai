import Link from "next/link";

const planos = [
  { title: "Atenda Start", badge: "Self-service", desc: "Para micro e pequenas. Atendimento inteligente sem complicação.", highlight: "Comece rápido" },
  { title: "Atenda Pro", badge: "Managed", desc: "Para empresas em crescimento. Atendimento que cresce com você.", highlight: "Otimização contínua" },
  { title: "Atenda Enterprise", badge: "White-label", desc: "Para corporações. Atendimento em escala corporativa.", highlight: "Governança e escala" }
];

export default function Planos() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Planos</h2>

      <p className="mt-3 max-w-2xl text-atendaGray">
        Um produto para cada estágio. Você ativa e escala conforme o crescimento do seu atendimento.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {planos.map((p) => (
          <div key={p.title} className="rounded-3xl border p-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-atendaGray">
                {p.badge}
              </span>
            </div>

            <p className="mt-4 text-sm text-atendaGray">{p.desc}</p>
            <p className="mt-6 font-mono text-xs text-atendaBlack">{p.highlight}</p>

            <Link
              href="/briefing"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-atendaBlue px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Falar com especialista
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
