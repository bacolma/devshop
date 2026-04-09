// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { LoginForm } from "./Login/LoginForm";
import  UserList from "./pages/users/UserList";
import  UserCreate from "./pages/users/UserCreate";
import  UserEdit from "./pages/users/UserEdit";
import  UserDelete from "./pages/users/UserDelete";


function Placeholder({ title }: { title: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-slate-400 mt-2">Página en construcción…</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      {/* ✅ Área protegida */}
      <Route element={<PrivateRoute />}>
        <Route path="/contable" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="list" element={<UserList />} />
          <Route path="incluir" element={<UserCreate />} />
          <Route path="eliminar" element={<UserDelete />} />
          <Route path="modifica" element={<UserEdit />} />
        </Route>
      </Route>

      <Route
        path="/"
        element={
          localStorage.getItem("token")
            ? <Navigate to="/contable" replace />
            : <Navigate to="/login" replace />
        }
      />
 
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}