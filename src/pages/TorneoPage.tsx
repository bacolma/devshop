import React, { useState } from "react";
import { GrupoCard } from "../components/Torneo/GrupoCard";

const gruposMock = [
  {
    nombre: "Grupo A",
    equipos: [
      { nombre: "Estados Unidos", pj: 0, g: 0, e: 0, p: 0, dif: 0, pts: 0 },
      { nombre: "Países Bajos", pj: 0, g: 0, e: 0, p: 0, dif: 0, pts: 0 },
      { nombre: "Senegal", pj: 0, g: 0, e: 0, p: 0, dif: 0, pts: 0 },
      { nombre: "Costa Rica", pj: 0, g: 0, e: 0, p: 0, dif: 0, pts: 0 },
    ],
    partidos: [
      "Estados Unidos vs Países Bajos",
      "Senegal vs Costa Rica",
      "Estados Unidos vs Senegal",
      "Países Bajos vs Costa Rica",
    ],
  },
  // puedes agregar B, C, D igual
];

export default function TorneoPage() {
    
  const [tab, setTab] = useState<"grupos" | "elim">("grupos");

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Mundial 2026</h1>
      <p className="text-gray-500 mb-4">
        0 de 104 partidos jugados · 11 Jun – 19 Jul 2026
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("grupos")}
          className={`px-4 py-2 rounded-lg ${
            tab === "grupos"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Fase de Grupos
        </button>

        <button
          onClick={() => setTab("elim")}
          className={`px-4 py-2 rounded-lg ${
            tab === "elim"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Eliminatorias
        </button>
      </div>

      {/* Contenido */}
      {tab === "grupos" && (
        <div className="flex flex-wrap gap-6">
          {gruposMock.map((grupo, index) => (
            <GrupoCard key={index} {...grupo} />
          ))}
        </div>
      )}

      {tab === "elim" && <div>Bracket eliminatorias aquí</div>}
    </div>
  );
};
