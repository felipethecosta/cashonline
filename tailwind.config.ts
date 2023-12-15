import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit", // Habilita o modo JIT para Tailwind CSS
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ajuste os caminhos se necessário
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#197BBD",
      },
      spacing: {
        // Adicione aqui valores personalizados de espaçamento, se necessário
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      // Aqui você pode estender outras propriedades conforme necessário
    },
  },
  plugins: [],
};

export default config;
