// src/components/RootLayout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DashBoard Financeira",
  description: "Descrição Financeira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          {/* Assegure-se de que o contêiner interior tem uma altura máxima ajustada */}
          <div className="flex-1 overflow-hidden">
            {/* Container para o conteúdo, ajustando a altura para preencher a tela, exceto o espaço ocupado pelo cabeçalho/rodapé se houver */}
            <div
              className="container mx-auto bg-white rounded-3xl shadow-2xl my-4 overflow-hidden"
              style={{ maxHeight: "calc(95vh - 2rem)" }}
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
