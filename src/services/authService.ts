import { API_BASE_URL, API_AUTH_LOGIN } from "../config/apiConfig";
import type { LoginCredentials, LoginResponse } from "../types/auth.types";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const url = `${API_BASE_URL}${API_AUTH_LOGIN}`;
  console.log("API URL:", url);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept" : "application/json",
    },
    body: JSON.stringify(credentials),
  });
  console.log("response:", response);
  
  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Respuesta no JSON:", text);
    throw new Error("La API no devolvió JSON válido");
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message ?? `Error HTTP: ${response.status}`);
  }

  return response.json();
};
