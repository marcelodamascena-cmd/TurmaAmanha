import Hero from "@/components/Hero";
import GraphTimeline from "@/components/GraphTimeline";
import ComoParticipar from "@/components/ComoParticipar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--color-ink)]">
      <Hero />
      <GraphTimeline />
      <ComoParticipar />
      <footer className="border-t border-[#1b2740] px-6 py-10 text-center font-[family-name:var(--font-mono-display)] text-xs text-[color:var(--color-muted)] sm:px-10">
        mural-da-turma // feito em Next.js + Tailwind CSS para a nossa aula de
        Git &amp; GitHub
      </footer>
    </main>
  );
}
