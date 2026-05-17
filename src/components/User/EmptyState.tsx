import React from "react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      
      {/* Icono */}
      <div className="text-5xl mb-4">📋</div>

      {/* Título */}
      <h2 className="text-lg font-semibold text-gray-700">
        Aún no perteneces a ninguna plantilla
      </h2>

      {/* Descripción */}
      <p className="text-gray-500 mt-2 max-w-md">
        El administrador debe agregarte a una plantilla para que puedas ingresar tus predicciones
      </p>
    </div>
  );
};