import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-atendaGray">
          © {new Date().getFullYear()} Atenda.ai. Todos os direitos reservados.
        </p>

        <div className="flex gap-5 text-sm">
          <Link href="/privacidade" className="text-atendaGray hover:text-atendaBlack">
            Privacidade
          </Link>
          <Link href="/termos" className="text-atendaGray hover:text-atendaBlack">
            Termos
          </Link>
          <Link href="/briefing" className="text-atendaGray hover:text-atendaBlack">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
