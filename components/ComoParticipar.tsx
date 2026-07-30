const passos = [
	{
		comando: "git clone <url-do-repositorio>",
		texto: "Clone o repositório da turma para a sua máquina.",
	},
	{
		comando: "git checkout -b commit/seu-usuario",
		texto: "Crie uma branch só sua, para não mexer direto na main.",
	},
	{
		comando: "code data/turma.ts",
		texto:
		"Abra o arquivo data/turma.ts e copie o bloco de exemplo para o final do array `commits`. Troque os valores pelos seus dados.",
	},
	{
		comando: "git add data/turma.ts",
		texto: "Adicione o arquivo alterado à área de staging.",
	},
	{
		comando: 'git commit -m "feat: adiciona commit de <seu nome>"',
		texto: "Registre a alteração com uma mensagem clara, no imperativo.",
	},
	{
		comando: "git push -u origin commit/seu-usuario",
		texto: "Envie sua branch para o GitHub.",
	},
	{
		comando: "Abrir Pull Request",
		texto:
		"No GitHub, abra um Pull Request da sua branch para a main e aguarde a revisão.",
	},
];

export default function ComoParticipar() {
  return (

    <section id="como-participar" className="border-t border-[#1b2740] bg-ink-soft px-6 py-20 sm:px-10">

      	<div className="mx-auto max-w-3xl">
			
			<h2 className="mb-2 font-mono-display text-xl text-fog sm:text-2xl">
				Como participar
			</h2>
			
			<p className="mb-10 text-sm text-muted sm:text-base">
				Só um arquivo muda nesta aula:{" "}
				<code className="rounded bg-[#0d1626] px-1.5 py-0.5 text-merge">
					data/turma.ts
				</code>
				. Siga os passos na ordem.
			</p>

			<ol className="space-y-0">
				{passos.map((passo, i) => (
				<li key={passo.comando} className="flex gap-4 border-b border-[#1b2740] py-4 last:border-none sm:gap-6">

					<span className="w-6 flex-none font-mono-display text-sm text-line">
						{String(i + 1).padStart(2, "0")}
					</span>
					
					<div className="min-w-0">
						<code className="block break-all font-mono-display text-sm text-merge sm:text-[15px]">
							{passo.comando}
						</code>
						<p className="mt-1.5 text-sm leading-relaxed text-muted">
							{passo.texto}
						</p>
					</div>

				</li>
			))}
			</ol>

			<div className="mt-10 rounded-lg border border-[#2a3550] bg-[#0d1626] p-5 text-sm leading-relaxed text-muted">
				<span className="font-mono-display text-pending">
					dica:
				</span>{" "}
				se duas pessoas editarem o arquivo ao mesmo tempo, o Git pode
				acusar um <em>conflito de merge</em>. Isso é normal — vamos
				resolver juntos ao vivo, é uma das coisas mais importantes de
				aprender no Git.
			</div>
      	</div>
    </section>
  );
}
