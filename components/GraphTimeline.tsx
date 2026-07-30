import { loadCommits } from "@/data/turma";
import CommitNode from "./CommitNode";

export default async function GraphTimeline() {
  const ordered = await loadCommits();

  return (
    <section id="mural" className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
		
		<div className="mb-10 flex items-baseline justify-between">
			<h2 className="font-mono-display text-xl text-fog sm:text-2xl">
				Mural da turma
			</h2>
			<span className="font-mono-display text-xs text-muted">
				git log --graph
			</span>
		</div>

		<ol className="relative">
			{/* the graph line */}
			<div aria-hidden className="absolute top-2 bottom-2 left-3.75 w-px bg-line sm:left-5.75"/>

			<div className="flex flex-col gap-6">
				{ordered.map((commit, i) => (
					<CommitNode key={`${commit.usuario}-${commit.data}-${i}`} commit={commit} index={ordered.length - 1 - i} />
				))}
			</div>

			{/* next commit — invites the next student */}
			<li className="relative mt-6 pl-14 sm:pl-20">
				<span className="pulse-node absolute top-1.5 left-3.75 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-dashed border-pending bg-transparent sm:left-5.75" aria-hidden
				/>
				<div className="rounded-lg border border-dashed border-[#2a3550] p-5 text-sm text-muted sm:p-6">
					<span className="font-mono-display text-pending">
						próximo commit
					</span>{" "}
					— ainda não mesclado. Pode ser o seu.
				</div>
			</li>
		</ol>
    </section>
  );
}
