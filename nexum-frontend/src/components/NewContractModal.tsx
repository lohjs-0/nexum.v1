interface NewContractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewContractModal({ isOpen, onClose }: NewContractModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white dark:bg-gray-800 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Novo Contrato</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4 px-6 py-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome do Cliente
            </label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
              placeholder="Ex: Empresa ABC"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Data de Início
              </label>
              <input
                type="date"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Data de Término
              </label>
              <input
                type="date"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Valor do Contrato
            </label>
            <input
              type="number"
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
              placeholder="5000"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" defaultChecked />
            <span className="text-sm">Contrato ativo</span>
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4 dark:border-gray-700">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
