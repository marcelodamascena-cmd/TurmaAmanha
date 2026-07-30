import { commits } from "@/data/turma";

export default function Hero() {
  const total = commits.length;

  return (
		<header className="relative overflow-hidden border-b border-[#1b2740] px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
			{/* faint background graph lines */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
				backgroundImage:
					"linear-gradient(#e7ecf5 1px, transparent 1px), linear-gradient(90deg, #e7ecf5 1px, transparent 1px)",
				backgroundSize: "42px 42px",
				}}
			/>

			<div className="relative mx-auto max-w-3xl">
				<div className="mb-6 flex items-center gap-2 font-mono-display text-xs text-muted">
					<span className="h-2 w-2 rounded-full bg-merge" />
					<span>origin/main</span>
					<span className="text-line">·</span>
					<span>{total} commit{total === 1 ? "" : "s"} mesclado{total === 1 ? "" : "s"}</span>
				</div>

				<h1 className="font-mono-display text-3xl leading-tight font-medium text-fog sm:text-5xl">
					<span className="diff-caret">$</span> git clone mural-da-turma
					<span className="cursor-blink text-merge">▌</span>
				</h1>

				<p className="mt-6 max-w-xl font-sans-body text-base leading-relaxed text-muted sm:text-lg">
					Este site é o repositório da nossa turma. Cada pessoa clona o
					projeto, adiciona o seu próprio commit ao mural e abre um Pull
					Request. Quando o professor faz o merge, seu nome entra para sempre
					na linha do tempo abaixo.
				</p>

				<div className="mt-10 flex flex-wrap gap-3">
					<a href="#como-participar" className="rounded-md bg-merge px-5 py-2.5 font-mono-display text-sm font-medium text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-merge">
						Como participar →
					</a>
					<a href="#mural" className="rounded-md border border-[#2a3550] px-5 py-2.5 font-mono-display text-sm font-medium text-fog transition hover:border-merge focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-merge">
						Ver o mural
					</a>
				</div>
			</div>
		</header>
  );
}
