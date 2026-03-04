import Header from "../components/Header";
import Hero from "../components/Hero";
import Canais from "../components/Canais";
import Beneficios from "../components/Beneficios";
import FluxoPaciente from "../components/FluxoPaciente";
import Planos from "../components/Planos";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-atBg text-atText font-sans">
      <Header />
      <Hero />
      <Canais />
      <Beneficios />
      <FluxoPaciente />
      <Planos />
      <section id="faq" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-[34px] lg:text-[38px] font-semibold leading-[1.1] tracking-[-0.03em] text-atText">
          FAQ
        </h2>
        <div className="mt-8 grid gap-4">
          {[
            {
              q: "Isso substitui meu atendimento humano?",
              a: "Não. O agente organiza o volume, qualifica e encaminha. Seu time entra nas conversas que exigem decisão humana."
            },
            {
              q: "Isso serve para clínicas particulares e convênio?",
              a: "Sim. Ajustamos o fluxo para o modelo de atendimento da sua clínica, mantendo comunicação ética e profissional."
            },
            {
              q: "O agente diagnostica ou prescreve?",
              a: "Não. Ele não substitui julgamento clínico. Ele orienta, organiza e encaminha."
            }
          ].map((f) => (
            <details key={f.q} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
              <summary className="cursor-pointer text-[15px] font-semibold text-atText">
                {f.q}
              </summary>
              <p className="mt-3 text-[14px] leading-[1.65] text-atMuted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTAFinal />
      <Footer />
    </main>
  );
}
