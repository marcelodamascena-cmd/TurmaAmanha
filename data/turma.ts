// ============================================================================
// MURAL DA TURMA — histórico de commits
// ----------------------------------------------------------------------------
// Agora cada aluno pode criar o próprio arquivo na pasta `data/alunos`.
// Isso evita conflitos no mesmo arquivo e permite que cada um contribua com
// seu próprio commit sem precisar editar o arquivo central.
//
// Passo a passo:
//   1. Crie um arquivo novo em `data/alunos` com o padrão `seu-nome.ts`.
//   2. Copie o modelo do arquivo `data/alunos/README.md`.
//   3. Troque os valores pelos seus dados.
//   4. No terminal:
//        git checkout -b commit/seu-usuario
//        git add data/alunos/seu-nome.ts
//        git commit -m "feat: adiciona commit de <seu nome>"
//        git push -u origin commit/seu-usuario
//   5. Abra um Pull Request no GitHub e aguarde o merge. 🎉
// ============================================================================

import { promises as fs } from "fs";
import path from "path";

export type Commit = {
  /** Seu nome (ou apelido) como deve aparecer no mural */
  nome: string;
  /** Seu usuário do GitHub, sem o @ — usado para buscar seu avatar */
  usuario: string;
  /** Mensagem de commit no padrão imperativo, ex: "adiciona suporte a X" */
  mensagem: string;
  /** O que você aprendeu ou uma frase curta sobre você */
  nota: string;
  /** Data no formato AAAA-MM-DD */
  data: string;
};

export function extractCommitsArray(source: string): string {
  // Use a regex that is compatible with older TS targets (avoid `/s` flag)
  const match = source.match(/export\s+const\s+commits\b[^=]*=\s*\[/);

  if (!match) {
    throw new Error("Nenhum array 'commits' encontrado no arquivo do aluno.");
  }

  const arrayStart = match.index! + match[0].lastIndexOf("[");

  if (arrayStart === -1) {
    throw new Error("O arquivo do aluno não contém um array 'commits' válido.");
  }

  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }

      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "[") {
      depth += 1;
    } else if (char === "]") {
      depth -= 1;

      if (depth === 0) {
        return source.slice(arrayStart, index + 1);
      }
    }
  }

  throw new Error("Não foi possível encontrar o fim do array 'commits'.");
}

export async function loadCommits(): Promise<Commit[]> {
  const alunosDir = path.join(process.cwd(), "data", "alunos");

  try {
    const files = (await fs.readdir(alunosDir))
      .filter((file) => file.endsWith(".ts") && file !== "README.md")
      .sort();

    const commitsByFile = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(alunosDir, file);
        const source = await fs.readFile(filePath, "utf8");
        const arraySource = extractCommitsArray(source);
        const parsed = new Function(`return (${arraySource});`)() as Commit[];

        return Array.isArray(parsed) ? parsed : [];
      })
    );

    return commitsByFile.flat().sort((a, b) => (a.data > b.data ? -1 : 1));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}
