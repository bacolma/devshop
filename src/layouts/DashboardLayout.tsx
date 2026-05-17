// src/layouts/DashboardLayout.tsx
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation  } from "react-router-dom";
import { SideBar } from "../components/SideBar";

const BallIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="32"
      cy="32"
      r="30"
      fill="#E6F7FF"
      stroke="#0EA5E9"
      strokeWidth="2"
    />
    <path d="M32 10l9 6-2 10-7 5-7-5-2-10 9-6z" fill="#1D4ED8" />
    <path d="M14 25l9-9 2 10-6 7-5-8z" fill="#60A5FA" />
    <path d="M50 25l-9-9-2 10 6 7 5-8z" fill="#60A5FA" />
    <path d="M22 48l-9-7 8-6 8 3 1 10-8 0z" fill="#93C5FD" />
    <path d="M42 48l9-7-8-6-8 3-1 10 8 0z" fill="#93C5FD" />
  </svg>
);

const TopBar = () => {
  const navBase = "px-5 py-2 rounded-lg font-semibold transition-colors";
  const navInactive = "text-white/90 hover:text-white hover:bg-white/10";
  const navActive = "bg-green-700 text-white shadow-sm";
  
  const navigate = useNavigate();

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
          <span className="text-xl font-bold text-white">Mundial 2026</span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-3 text-sm">

          <NavLink
            to="partidos"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : navInactive}`
            }
          >
            Partidos
          </NavLink>
          
          <NavLink
            to="template"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : navInactive}`
            }
          >
            Plantillas
          </NavLink>

          <NavLink
            to="torneo"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : navInactive}`
            }
          >
            Torneo
          </NavLink>          
          <a
            href="public/docs/documentacion.pdf" // ruta del PDF (public/)
            download
            className={`${navBase} ${navInactive}`}
          >
            Doc
          </a>

          {/* Separador vertical */}
          <div className="mx-1 h-6 w-px bg-white/25" />

          <span className="px-2 font-semibold text-white/90">Marcos</span>

          <button
            className={`${navBase} ${navInactive} border border-white/15`}
            type="button"
            onClick={() => logout()}
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
      Mundial 2026 Predicciones
    </div>
  </footer>
);

export default function DashboardLayout() {

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar/>
      {/* Content */}
      <main className="flex-1">
        {/* ✅ AQUÍ se renderiza el contenido de las rutas hijas */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
