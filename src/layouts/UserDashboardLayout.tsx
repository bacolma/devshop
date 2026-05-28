// src/layouts/UserDashboardLayout.tsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const BallIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" fill="#E6F7FF" stroke="#0EA5E9" strokeWidth="2" />
    <path d="M32 10l9 6-2 10-7 5-7-5-2-10 9-6z" fill="#1D4ED8" />
  </svg>
);

const TopBarUser = () => {
  const navBase = "px-5 py-2 rounded-lg font-semibold transition-colors";
  const navInactive = "text-white/90 hover:text-white hover:bg-white/10";
  const navActive = "bg-green-700 text-white shadow-sm";

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol_user");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-[#0b5a35] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <BallIcon className="h-7 w-7" />
          <span className="text-xl font-bold text-white">
            Mundial 2026
          </span>
        </div>

        {/* Nav USER */}
        <nav className="flex items-center gap-3 text-sm">

          <NavLink
            to="plantillas"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : navInactive}`
            }
          >
            Mis plantillas
          </NavLink>

          <NavLink
            to="torneo"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : navInactive}`
            }
          >
            Torneo
          </NavLink>

          {/* Separador */}
          <div className="mx-1 h-6 w-px bg-white/25" />

          <span className="px-2 font-semibold text-white/90">
            {user?.nombre || "Usuario"}
          </span>

          <button
            className={`${navBase} ${navInactive} border border-white/15`}
            onClick={logout}
          >
            Salir
          </button>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#0b5a35]">
    <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm font-semibold text-green-200">
      Mundial 2026 Quinelas
    </div>
  </footer>
);

export default function UserDashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBarUser />
        <main className="flex-1">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}
