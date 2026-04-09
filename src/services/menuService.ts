import { API_BASE_URL, API_MENU } from "../config/apiConfig";
import type { MenuItem } from "../types/menu.types";

const rol_user = localStorage.getItem("rol_user");

export const getMenu = async (): Promise<MenuItem[]> => {
  const url = `${API_BASE_URL}${API_MENU}/${rol_user}`;
  console.log("API URL:", url);

  const token = sessionStorage.getItem("auth_token");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.error("Respuesta no JSON:", text);
    throw new Error("La API no devolvió JSON válido");
  }

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const data = await response.json();

  return data.menu;
};
