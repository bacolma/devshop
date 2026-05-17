import React from "react";

interface Plantilla {
  id: number;
  nombre: string;
}

interface Props {
  plantillas: Plantilla[];
  selected: number;
  onChange: (id: number) => void;
}

export const PlantillaSelector: React.FC<Props> = ({
  plantillas,
  selected,
  onChange,
}) => {
  return (
    <select
      className="border border-green-400 text-green-700 rounded-lg px-3 py-2 bg-white"
      value={selected}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      {plantillas.map((p) => (
        <option key={p.id} value={p.id}>
          Plantilla: {p.nombre}
        </option>
      ))}
    </select>
  );
};