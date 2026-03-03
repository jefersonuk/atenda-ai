iimport Header from "../components/Header";
import Hero from "../components/Hero";
import Problema from "../components/Problema";
import Pilares from "../components/Pilares";
import ComoFunciona from "../components/ComoFunciona";
import Planos from "../components/Planos";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function Home() {
  return (
    <main className="bg-white text-atendaBlack">
      <Header />
      <Hero />
      <Problema />
      <Pilares />
      <ComoFunciona />
      <Planos />
      <CTAFinal />

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>

        <div className="mt-8 grid gap-4">
          <details className="rounded-2xl border p-6">
            <summary className="cursor-pointer text-base font-semibold">
              Isso substitui meu atendimento humano?
            </summary>
            <p className="mt-3 text-sm text-atendaGray">
              Não. O agente atende o volume, qualifica e prepara o terreno. Seu time entra nas conversas que exigem decisão humana.
            </p>
          </details>

          <details className="rounded-2xl border p-6">
            <summary className="cursor-pointer text-base font-semibold">
              O agente pode vender sem ser agressivo?
            </summary>
            <p className="mt-3 text-sm text-atendaGray">
              Sim. A abordagem é humanizada e orientada a entender o cliente, tratar objeções e conduzir para o próximo passo com respeito.
            </p>
          </details>

          <details className="rounded-2xl border p-6">
            <summary className="cursor-pointer text-base font-semibold">
              Quais canais vocês atendem?
            </summary>
            <p className="mt-3 text-sm text-atendaGray">
              Começamos pelo seu principal canal, normalmente WhatsApp e Instagram. Depois expandimos para site e integrações.
            </p>
          </details>

          <details className="rounded-2xl border p-6">
            <summary className="cursor-pointer text-base font-semibold">
              Em quanto tempo fica pronto?
            </summary>
            <p className="mt-3 text-sm text-atendaGray">
              Depende do seu escopo e material. O briefing acelera e define o caminho mais curto.
            </p>
          </details>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
