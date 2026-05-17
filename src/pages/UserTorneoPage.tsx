import React, { useEffect, useState } from "react";
import { GrupoCard } from "../components/Torneo/GrupoCard";
import { PlantillaSelector } from "../components/User/PlantillaSelector";

export default function UserTorneoPage() {
  const [tab, setTab] = useState<"grupos" | "elim">("grupos");

  const [plantillas, setPlantillas] = useState<any[]>([]);
  const [selectedPlantilla, setSelectedPlantilla] = useState<number>(0);

  const [grupos, setGrupos] = useState<any[]>([]);

  // ✅ cargar plantillas usuario
  useEffect(() => {
    const data = [
      { id: 1, nombre: "Mundial Rimac 2026" },
    ];

    setPlantillas(data);
    setSelectedPlantilla(data[0]?.id);
  }, []);

  // ✅ cargar grupos según plantilla
  useEffect(() => {
    if (!selectedPlantilla) return;

    // 🔹 aquí luego llamas a API real
    setGrupos([
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
        ],
      },
    ]);
  }, [selectedPlantilla]);

  return (
    <div className="p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Mundial 2026</h1>
          <p className="text-gray-500">
            0 de 104 partidos jugados · 11 Jun – 19 Jul 2026
          </p>
        </div>

        {/* Selector */}
        {plantillas.length > 0 && (
          <PlantillaSelector
            plantillas={plantillas}
            selected={selectedPlantilla}
            onChange={setSelectedPlantilla}
          />
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-4 mb-6">
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
          {grupos.map((g, index) => (
            <GrupoCard key={index} {...g} />
          ))}
        </div>
      )}

      {tab === "elim" && (
        <div className="text-gray-500">
          Bracket de eliminatorias (pendiente)
        </div>
      )}
    </div>
  );
};
