export default function Canais() {
  const canais = [
    { title: "WhatsApp", desc: "Triagem, dúvidas e encaminhamento para agenda.", tag: "principal" },
    { title: "Instagram", desc: "Responde directs e converte interesse em consulta.", tag: "comum" },
    { title: "Site", desc: "Capta leads e direciona para briefing e agendamento.", tag: "opcional" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-[34px] lg:text-[38px] font-semibold leading-[1.1] tracking-[-0.03em] text-atText">
            Atendimento em uma única lógica, do jeito certo
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-atMuted">
            O paciente não quer esperar. Sua clínica não pode perder oportunidade.
            Nós estruturamos o atendimento para responder com clareza e conduzir para o próximo passo.
          </p>
        </div>

        <div className="grid gap-4">
          {canais.map((c) => (
            <div
              key={c.title}
              className="rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-atText">
                  {c.title}
                </h3>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-atMuted">
                  {c.tag}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-atMuted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
