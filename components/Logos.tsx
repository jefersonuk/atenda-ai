export default function Logos() {
  const chips = ["Clínicas médicas", "Odontologia", "Nutrição", "Estética", "Recepção", "Agendamento"];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">
      <div className="rounded-[26px] border border-white/10 bg-white/[0.04] px-6 py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-atMuted">
            Feito para rotina de clínica: atendimento, triagem e agenda com padrão premium.
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-atMuted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
