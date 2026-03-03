import Header from "../components/Header";
import Hero from "../components/Hero";
import ParaClinicas from "../components/ParaClinicas";
import ProvaClinicas from "../components/ProvaClinicas";
import FluxoPaciente from "../components/FluxoPaciente";
import SegurancaSaude from "../components/SegurancaSaude";
import Planos from "../components/Planos";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-atBg text-atText">
      <Header />
      <Hero />
      <ParaClinicas />
      <ProvaClinicas />
      <FluxoPaciente />
      <SegurancaSaude />
      <Planos />
      <Footer />
    </main>
  );
}
