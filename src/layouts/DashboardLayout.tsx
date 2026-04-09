// src/layouts/DashboardLayout.tsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const data = localStorage.getItem("user");
  const usuario = data ? JSON.parse(data) : null;

  console.log("data", data);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol_user");
    localStorage.removeItem("user");
    sessionStorage.removeItem("auth_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-4">
          <div className="font-medium">
            Panel –  User: {usuario?.username}  Rol: {usuario?.role}
          </div>

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
