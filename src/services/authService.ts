
import { LoginCredentials, LoginResponse } from "../types/auth.types";

export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const { email, password } = credentials;

  // Simulación (luego reemplazas por fetch/axios)
  if (email === "admin@test.com" && password === "12345678") {
    return Promise.resolve({ token: "fake-jwt-token" });
  }

  throw new Error("Credenciales incorrectas");
};
