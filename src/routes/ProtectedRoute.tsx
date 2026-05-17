import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getRole, isAuthenticated, type Role } from "../auth/storage";

type Props = {
  allowedRoles?: Role[];
};

export default function ProtectedRoute({ allowedRoles }: Props) {
  const location = useLocation();

  // 1) Validar que esté logueado
  if (!isAuthenticated()) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // 2) Leer rol desde localStorage (rol_user)
  const role = getRole();

  // Si no hay rol válido → login
  if (!role) {
    return <Navigate to="/" replace />;
  }

  // 3) Validar permisos por rol
  if (allowedRoles && !allowedRoles.includes(role)) {
    // si intentan entrar donde no corresponde → redirige según rol
    return <Navigate to={role === "ADMIN" ? "/home" : "/user"} replace />;
  }

  return <Outlet />;
}