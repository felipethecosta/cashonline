import React, { useState } from "react";
import {
  IoHomeOutline,
  IoListOutline,
  IoCardOutline,
  IoReceiptOutline,
  IoSettingsOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import UserCreationModal from "../UserCreationModal/UserCreationModal"; // Ajuste o caminho de importação conforme necessário

const Sidebar = () => {
  // const [showUserCreationModal, setShowUserCreationModal] = useState(false);
  return (
    // Container todo.
    <div className="flex h-screen w-64 flex-col items-center bg-white bg-opacity-95 p-10 shadow-xl">
      {/* Logo e nome */}
      <div className="flex w-full items-center justify-center py-5">
        {/* Adicione a imagem do seu logo aqui, se você tiver uma */}
        <span className="text-xl font-bold text-gray-800">cloudcash</span>
      </div>

      {/* Links de navegação */}
      <nav className="flex flex-col items-center">
        <ul className="space-y-2 w-full">
          {/* Utilize o Tailwind para centralizar o texto e adicionar o efeito de destaque */}
          <li className="w-full">
            <a
              href="#"
              className="flex w-full items-center justify-start rounded-lg p-2 text-gray-700 hover:bg-custom-blue hover:text-white transition-colors"
            >
              <IoHomeOutline size={24} className="mr-3" />
              Overview
            </a>
          </li>
          {/* Repita para os outros ícones e rotas */}
          <li className="w-full">
            <a
              href="#"
              className="flex w-full items-center justify-start rounded-lg p-2 text-gray-700 hover:bg-custom-blue hover:text-white transition-colors"
            >
              <IoListOutline size={24} className="mr-3" />
              Transactions
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="flex w-full items-center justify-start rounded-lg p-2 text-gray-700 hover:bg-custom-blue hover:text-white transition-colors"
            >
              <IoCardOutline size={24} className="mr-3" />
              <span className="ml-2">Cards</span>
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="flex w-full items-center justify-start rounded-lg p-2 text-gray-700 hover:bg-custom-blue hover:text-white transition-colors"
            >
              <IoReceiptOutline size={24} className="mr-3" />
              <span className="ml-2">Invoices</span>
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="flex w-full items-center justify-start rounded-lg p-2 text-gray-700 hover:bg-custom-blue hover:text-white transition-colors"
            >
              <IoSettingsOutline size={24} className="mr-3" />
              <span className="ml-2">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    // </div>
  );
};

export default Sidebar;
