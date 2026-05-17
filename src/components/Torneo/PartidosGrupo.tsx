import React from "react";

interface Props {
  partidos: string[];
}

export const PartidosGrupo: React.FC<Props> = ({ partidos }) => {
  return (
    <div className="text-xs text-gray-600 mt-3 space-y-1">
      {partidos.map((p, index) => (
        <div key={index}>{p}</div>
      ))}
    </div>
  );
};