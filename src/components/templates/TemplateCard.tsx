import React from "react";

interface Props {
  nombre: string;
  fecha: string;
  onGestionar: () => void;
  onEliminar: () => void;
}

export const TemplateCard: React.FC<Props> = ({
  nombre,
  fecha,
  onGestionar,
  onEliminar,
}) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5 w-full max-w-md">
      {/* Header verde */}
      <div className="h-2 bg-green-600 rounded-t-xl -m-5 mb-4"></div>

      <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
      <p className="text-sm text-gray-500 mb-4">Creada el {fecha}</p>

      <div className="flex justify-between items-center">
        <button
          onClick={onGestionar}
          className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200"
        >
          Gestionar
        </button>

        <button
          onClick={onEliminar}
          className="text-red-500 hover:underline"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};