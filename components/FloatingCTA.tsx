import Link from "next/link";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/briefing"
        className="bg-atendaBlue text-white px-5 py-4 rounded-full shadow-lg font-medium hover:opacity-90 transition"
      >
        Falar com especialista
      </Link>
    </div>
  );
}
