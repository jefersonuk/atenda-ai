const steps = [
  { n: "1", title: "Mapeamento", desc: "Entendemos seu funil, canais e objeções." },
  { n: "2", title: "Treinamento", desc: "A IA aprende seu produto, regras e tom de voz." },
  { n: "3", title: "Integração", desc: "Conecta WhatsApp, Instagram, site e CRM." },
  { n: "4", title: "Otimização", desc: "Ajustes contínuos para aumentar conversão." }
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">
        Simples de implementar. Rápido de escalar.
      </h2>

      <p className="mt-3 max-w-2xl text-atendaGray">
        Um processo curto, objetivo e orientado a resultado.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border p-6">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-atendaBlue">
              {s.n}
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-atendaGray">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
