import { API_BASE_URL, API_AUTH_LOGIN, API_REGISTER} from "../config/apiConfig";
import type { LoginCredentials, LoginResponse, RegisterRequest, RegisterResponse } from "../types/auth.types";

const TOKEN_KEY = "token";
const ROL_USER = "rol_user";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const url = `${API_BASE_URL}${API_AUTH_LOGIN}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials),
  });
 
  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Respuesta no JSON:", text);
    throw new Error("La API no devolvió JSON válido");
  }

   const data: LoginResponse = await response.json();

  if (!response.ok || !data.success) {
    const error = await response.json();
    throw new Error(error.message ?? `Error HTTP: ${response.status}`);
  }
  
  // ✅ GUARDAR TOKEN
  if (data.token) {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(ROL_USER, data.user.role);
    localStorage.setItem("user", JSON.stringify(data.user));
  } else {
    console.warn("Login exitoso pero sin token");
  }

  return data;
};

export const register = async (
  userData: RegisterRequest
): Promise<RegisterResponse> => {
  const url = `${API_BASE_URL}${API_REGISTER}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  // ✅ Validar que la respuesta sea JSON
  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Respuesta no JSON:", text);
    throw new Error("La API no devolvió JSON válido");
  }

  const data: RegisterResponse = await response.json();

  // ✅ Manejo de errores
  if (!response.ok || !data.success) {
    throw new Error(data.message ?? `Error HTTP: ${response.status}`);
  }

  // ✅ (Opcional) guardar sesión si el register también loguea
  if (data.token) {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(ROL_USER, data.user.role);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};
