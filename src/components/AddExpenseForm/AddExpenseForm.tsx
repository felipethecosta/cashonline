"use client";

import React, { useState } from "react";

const AddExpenseForm = () => {
  const [expense, setExpense] = useState({ category: "", amount: 0 });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você irá lidar com a adição do gasto, seja atualizando o estado local ou enviando para um backend
    console.log(expense);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Categoria"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Valor"
          value={expense.amount}
          onChange={(e) =>
            setExpense({ ...expense, amount: e.target.valueAsNumber })
          }
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 border rounded bg-blue-500 text-white"
        >
          Adicionar Gasto
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
