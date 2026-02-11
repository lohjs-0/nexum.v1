export function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm opacity-80">Olá 👋</span>
        <div className="w-8 h-8 rounded-full bg-blue-500" />
      </div>
    </header>
  );
}
