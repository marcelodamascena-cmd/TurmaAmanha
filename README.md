# mural-da-turma

Site usado na aula de **Git & GitHub**. É um mural em forma de "log de commits": cada aluno(a) clona o repositório, adiciona um commit ao mural editando **um único arquivo** (`data/turma.ts`), sobe a alteração e abre um Pull Request. O professor faz o merge ao vivo e o commit aparece na linha do tempo do site.

Feito com **Next.js (App Router)** + **TypeScript** + **Tailwind CSS v4**.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura relevante

```
data/turma.ts                  ← o ÚNICO arquivo que os alunos editam
components/Hero.tsx
components/GraphTimeline.tsx
components/CommitNode.tsx
components/ComoParticipar.tsx
```

## Roteiro da aula

1. Crie um repositório no GitHub e suba este projeto (`git init`, `git add .`, `git commit`, `git push`).
2. Cada aluno faz um **fork** ou é adicionado como colaborador.
3. Alunos clonam o repositório e criam uma branch (`git checkout -b commit/seu-usuario`).
4. Editam `data/turma.ts`, copiando o bloco de exemplo e preenchendo com seus dados.
5. `git add`, `git commit -m "feat: adiciona commit de <nome>"`, `git push`.
6. Abrem um Pull Request para `main`.
7. Você revisa e faz o **merge** ao vivo — o site atualiza (se estiver publicado, ex. Vercel, o deploy é automático).
8. Opcional: provoque de propósito um conflito de merge (peça para dois alunos editarem perto um do outro) para ensinar resolução de conflitos.

## Publicar (opcional)

O jeito mais simples é importar o repositório na [Vercel](https://vercel.com/new) — o deploy acontece automaticamente a cada merge na `main`, então a turma vê o mural crescer em tempo real.
