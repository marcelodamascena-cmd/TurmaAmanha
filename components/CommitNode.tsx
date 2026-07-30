import Image from "next/image";
import type { Commit } from "@/data/turma";

function hashHue(seed: string) {
	let h = 0;
	for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
	return h % 360;
}

export default function CommitNode({
	commit,
	index,
}: {
	commit: Commit;
	index: number;
}) {
	const hue = hashHue(commit.usuario || commit.nome);
	const shortSha = hashHue(commit.nome + commit.data)
		.toString(16)
		.padStart(5, "0")
		.slice(0, 7);

  	return (
    <li className="relative pl-14 sm:pl-20">
		{/* node dot on the graph line */}
		<span
			className="absolute top-1.5 left-3.75 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-ink bg-merge sm:left-5.75"
			aria-hidden
		/>

      	<article className="group rounded-lg border border-[#1f2c48] bg-ink-card p-5 transition hover:border-[#2a3550] sm:p-6">
			<div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-display text-xs text-muted">
				<span className="rounded bg-[#0d1626] px-2 py-0.5 text-merge">
					#{String(index + 1).padStart(3, "0")}
				</span>
				<span>{shortSha}</span>
				<span className="text-line">·</span>
				<time>{commit.data}</time>
			</div>

        <div className="flex items-start gap-4">
          <Image
            src={`https://github.com/${commit.usuario}.png?size=96`}
            alt={`${commit.nome} avatar`}
            width={48}
            height={48}
            className="h-12 w-12 flex-none rounded-full border border-[#2a3550] bg-[#0d1626]"
            style={{ boxShadow: `0 0 0 2px hsl(${hue} 55% 22%)` }}
          />
			<div className="min-w-0">
				<h3 className="font-mono-display text-base font-medium text-fog">
					{commit.nome}
					<a href={`https://github.com/${commit.usuario}`}
						target="_blank"
						rel="noreferrer"
						className="ml-2 text-muted transition hover:text-merge">

						@{commit.usuario}
					</a>
				</h3>
				<p className="diff-plus mt-1 font-mono-display text-sm text-fog">
					{commit.mensagem}
				</p>
				<p className="mt-2 text-sm leading-relaxed text-muted">
					{commit.nota}
				</p>
			</div>
			</div>
      	</article>
    </li>
  );
}
