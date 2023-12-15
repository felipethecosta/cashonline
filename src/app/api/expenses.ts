// pages/api/expenses.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Aqui você trataria o corpo da requisição `req.body`
    // e adicionaria a lógica para armazenar o gasto no banco de dados

    // Por exemplo, para armazenar em um array (apenas para fins de demonstração)
    const expense = req.body; // certifique-se de validar e sanitizar o input real
    console.log(expense); // Aqui você substituiria por lógica de inserção no banco de dados

    res.status(200).json({ message: "Despesa adicionada com sucesso!" });
  } else {
    // Se não for um POST, você pode retornar um erro ou lidar com outros métodos HTTP
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
