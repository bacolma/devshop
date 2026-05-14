export type Role = "ADMIN" | "USER";

export function getToken(): string | null {
  return localStorage.getItem("token"); // ajusta si tu token tiene otra key
}

export function getRole(): Role | null {
  const role = localStorage.getItem("rol_user"); // 👈 TU KEY
  if (role === "ADMIN" || role === "USER") return role;
  return null;
}

export function isAuthenticated(): boolean {
  return !!getToken();
}
