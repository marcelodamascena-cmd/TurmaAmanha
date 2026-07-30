// ============================================================================
// MURAL DA TURMA — histórico de commits
// ----------------------------------------------------------------------------
// Este arquivo é o ÚNICO que você vai editar na aula.
// Cada aluno(a) adiciona UM objeto novo dentro do array `commits`, seguindo
// exatamente o modelo abaixo. Depois é só: add, commit, push e abrir o Pull
// Request. O professor faz o merge e o seu commit aparece no mural.
//
// Passo a passo:
//   1. Copie o bloco de exemplo (entre os comentários COPIE A PARTIR DAQUI /
//      ATÉ AQUI) e cole no final do array, antes do `];`.
//   2. Troque os valores pelos seus dados.
//   3. Salve o arquivo.
//   4. No terminal:
//        git checkout -b commit/seu-usuario
//        git add data/turma.ts
//        git commit -m "feat: adiciona commit de <seu nome>"
//        git push -u origin commit/seu-usuario
//   5. Abra um Pull Request no GitHub e aguarde o merge. 🎉
// ============================================================================

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

export const commits: Commit[] = [
  // COPIE A PARTIR DAQUI ----------------------------------------------------
  {
    nome: "Marcelo Damascena",
    usuario: "mdamascena",
    mensagem: "feat: inicializa o mural da turma",
    nota: "Instrutor da turma — primeiro commit é sempre o mais difícil.",
    data: "2026-07-30",
  },
  // ATÉ AQUI -----------------------------------------------------------------
  
];
