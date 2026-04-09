// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No se encontró el elemento #root en el DOM");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter  basename="/devshop">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);