import { API_BASE_URL, API_USERS } from "../config/apiConfig";
import type { User } from "../types/User";

export const getUsers = async (queryParams: string = ""): Promise<User[]> => {
  const url = `${API_BASE_URL}${API_USERS}${queryParams}`;
  console.log("API URL:", url);

  const response = await fetch(url);

  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Respuesta no JSON:", text);
    throw new Error("La API no devolvió JSON válido");
  }

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return response.json();
};
