export function SideBar() {
  return (
    <aside className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="px-6 py-4 text-xl font-bold border-b border-slate-700">
        Mi App
      </div>

      <ul className="flex-1 px-4 py-6 space-y-2">
        <li className="px-4 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Dashboard
        </li>
        <li className="px-4 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Usuarios
        </li>
        <li className="px-4 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Reportes
        </li>
        <li className="px-4 py-2 rounded hover:bg-slate-700 cursor-pointer">
          Configuración
        </li>
      </ul>
    </aside>
  );
}