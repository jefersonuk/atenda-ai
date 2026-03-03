import Link from "next/link";

export default function Briefing() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Briefing</h1>
      <p className="mt-3 text-atendaGray">Página placeholder. Aqui entra o formulário interno.</p>
      <div className="mt-8">
        <Link href="/" className="text-atendaBlue hover:underline">Voltar</Link>
      </div>
    </main>
  );
}
