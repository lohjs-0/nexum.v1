import { useState } from "react";
import { NewContractModal } from "../components/NewContractModal";

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Contratos</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          + Novo Contrato
        </button>
      </div>

      {/* Lista (placeholder por enquanto) */}
      <div className="rounded-xl bg-white dark:bg-gray-800 shadow">
        <div className="p-6 text-gray-500">
          Nenhum contrato cadastrado ainda.
        </div>
      </div>

      <NewContractModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
