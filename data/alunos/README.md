# Pasta de commits por aluno

Cada aluno deve criar um arquivo próprio aqui, seguindo o padrão:

- nome do arquivo: `seu-nome.ts`
- exporte um array chamado `commits` do tipo `Commit`
- importe o tipo `Commit` a partir de `../turma`

Exemplo:

```ts
import type { Commit } from "../turma";

export const commits: Commit[] = [
  {
    nome: "Seu Nome",
    usuario: "seu-usuario-github",
    mensagem: "feat: adiciona meu commit",
    nota: "Uma frase sobre você",
    data: "2026-08-01",
  },
];
```
