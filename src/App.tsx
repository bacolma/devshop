// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { lazy, Suspense } from "react";
import { Register } from "./pages/registro/Register";

const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const UserDashboardLayout = lazy(() => import("./layouts/UserDashboardLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginForm = lazy(() => import("./pages/Login"));
const PartidosPage = lazy(() => import("./pages/partidos/PartidosPage"));

function Placeholder({ title }: { title: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-slate-400 mt-2">Página en construcción…</p>
    </div>
  );
}

function getLandingPath() {
  const token = localStorage.getItem("token");
  if (!token) return "/login";

  const rol = localStorage.getItem("rol_user");
  return rol === "ADMIN" ? "/home" : "/user";
}

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-slate-400">
          Cargando aplicación...
        </div>
      }
    >
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ ZONA ADMIN */}
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/home" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="partidos" element={<PartidosPage />} />
            <Route path="resultados/:fase" element={<PartidosPage />} />
          </Route>
        </Route>

        {/* ✅ ZONA USER (usa mismo layout por ahora) */}

        <Route element={<ProtectedRoute allowedRoles={["USER"]} />}>
          <Route path="/user" element={<UserDashboardLayout />}>
          </Route>
        </Route>

        {/* ✅ Landing inteligente según token + rol */}
        <Route path="/" element={<Navigate to={getLandingPath()} replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
