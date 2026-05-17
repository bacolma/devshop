import React, { useEffect, useState } from "react";
import { EmptyState } from "../components/User/EmptyState";
import { UserPlantillasList } from "../components/User/UserPlantillasList";

export const UserPlantillasPage = () => {
  const [plantillas, setPlantillas] = useState<any[]>([]);

  // 🔹 simulación API
  useEffect(() => {
    // aquí luego llamas a tu API real
    setPlantillas([]); // vacío -> muestra empty state
  }, []);

  console.log("plantillas:", plantillas);

  return (
    <div className="p-6">

      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800">Mis Plantillas</h1>

      <p className="text-gray-500 mt-1">
        Selecciona una plantilla para ingresar tus predicciones
      </p>

      {/* Contenido */}
      {!plantillas || plantillas.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-6">
          <UserPlantillasList plantillas={plantillas} />
        </div>
      )}
    </div>
  );
};
