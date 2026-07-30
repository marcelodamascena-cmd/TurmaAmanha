import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mural-da-turma // aula de git",
  description:
    "Repositório vivo da turma de Git & GitHub — cada aluno adiciona um commit ao mural.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
