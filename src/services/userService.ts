import {
  API_BASE_URL,
  API_USERS_LIST,
  API_USERS_CREA,
  API_USERS_DEL,
  API_USERS_UPD,
} from "../config/apiConfig";

import { api } from "./api";

import type { User, UserForms } from "../types/user.types";

function mapOrder(o: UserForms): UserForms {
  return {
      id: o.id.valueOf(),
      username: o.username.toString(),
      email: o.email.toString(),
      password: o.password.toString(),
      confirmPassword: o.confirmPassword.toString(),
      name : o.name.toString(),
      status: o.status.toString(),
      emailverified : o.emailverified.toString(),
      lastlogin : o.lastlogin.toString(),
  }
}

export const userService = {

  getAll: async (queryParams: string = ""): Promise<User[]> => {
    const url = `${API_BASE_URL}${API_USERS_LIST}${queryParams}`;
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
  },

  getById: async (id: number): Promise<User> => {
    const url = `${API_BASE_URL}${API_USERS_LIST}/${id}`;
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
  },

  create: async (data: Partial<UserForms>) => {
    return fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  update: async (id: number, data: Partial<UserForms>) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  remove: async (id: number) => {
    return fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
  },
};
