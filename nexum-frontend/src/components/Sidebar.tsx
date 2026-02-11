import { useState } from "react";

export function Sidebar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-gray-200 dark:border-gray-700">
          Nexum
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a className="block px-4 py-2 rounded-lg bg-blue-500 text-white">
            Dashboard
          </a>
          <a className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Contratos
          </a>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </div>
      </aside>
    </div>
  );
}
