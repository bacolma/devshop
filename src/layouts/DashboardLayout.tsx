// src/layouts/DashboardLayout.tsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-4 hidden md:block">
        <div className="text-xl font-semibold mb-6">DevShop</div>

        <nav className="space-y-2">
          <NavLink to="/dashboard" className={linkClass}>
            📊 Dashboard
          </NavLink>

          <NavLink to="/dashboard/orders" className={linkClass}>
            🧾 Orders
          </NavLink>

          <NavLink to="/dashboard/products" className={linkClass}>
            📦 Products
          </NavLink>

          <NavLink to="/dashboard/settings" className={linkClass}>
            ⚙️ Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-4">
          <div className="font-medium">Panel</div>

          <div className="flex items-center gap-2">
            <button
              onClick={logout}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-6">
          {/* ✅ AQUÍ se renderiza el contenido de las rutas hijas */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}