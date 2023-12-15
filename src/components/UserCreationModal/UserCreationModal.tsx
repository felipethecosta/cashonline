// components/UserCreationModal.tsx
"use client";

import React, { useState } from "react";

const UserCreationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Função para tratar a submissão do formulário
  const handleSubmit: React.EventHandler<
    React.FormEvent<HTMLFormElement>
  > = async (event) => {
    event.preventDefault();

    // Faz uma asserção de tipo para HTMLFormElement
    const form = event.target as HTMLFormElement;

    const formData = {
      username: (form.elements.namedItem("username") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      // Você pode adicionar mais campos conforme necessário
    };

    // Chama a função que executa a lógica assíncrona
    submitForm(formData);
  };

  // Função assíncrona separada para lidar com a submissão do formulário
  const submitForm = async (formData: { username: string; email: string }) => {
    try {
      // Faz a chamada para a API para criar o usuário
      // Substitua 'API_ENDPOINT' pelo endpoint correto
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Trata a resposta da API
      if (response.ok) {
        console.log("Usuário criado com sucesso!");
        closeModal(); // Fecha o modal se o usuário foi criado com sucesso
      } else {
        console.error("Falha ao criar o usuário.");
        // Aqui você pode lidar com erros, exibir uma mensagem para o usuário, etc.
      }
    } catch (error) {
      // Captura erros na chamada da API
      console.error("Erro ao conectar com a API", error);
    }
  };

  return (
    <>
      <button onClick={openModal}>Criar Usuário</button>
      {isOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Nome do Usuário"
              required
            />
            <input name="email" type="email" placeholder="Email" required />
            {/* ...outros campos necessários */}
            <button type="submit">Salvar Usuário</button>
          </form>
          <button onClick={closeModal}>Fechar</button>
        </div>
      )}
    </>
  );
};

export default UserCreationModal;
