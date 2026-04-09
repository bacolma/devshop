import { API_BASE_URL, API_AUTH_LOGIN } from "../config/apiConfig";
import type { LoginCredentials, LoginResponse } from "../types/auth.types";

const TOKEN_KEY = "auth_token";
const ROL_USER = "rol_user";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const url = `${API_BASE_URL}${API_AUTH_LOGIN}`;
  console.log("API URL:", url);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials),
  });
  console.log("response:", response);
  console.log("response:", response.headers.get("content-type"));
  console.log("JSON:", JSON.stringify(credentials));
 
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
    sessionStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(ROL_USER, data.user.role);
    localStorage.setItem("user", JSON.stringify(data.user));
  } else {
    console.warn("Login exitoso pero sin token");
  }

  return data;
};
