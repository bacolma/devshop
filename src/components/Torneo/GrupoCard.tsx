import React from "react";
import { TablaGrupo } from "./TablaGrupo";
import { PartidosGrupo } from "./PartidosGrupo";

interface Props {
  nombre: string;
  equipos: any[];
  partidos: string[];
}

export const GrupoCard: React.FC<Props> = ({
  nombre,
  equipos,
  partidos,
}) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 w-full max-w-sm">
      {/* Header */}
      <div className="bg-green-700 text-white text-center py-2 rounded-t-lg -m-4 mb-3 font-semibold">
        {nombre}
      </div>

      <TablaGrupo equipos={equipos} />

      <PartidosGrupo partidos={partidos} />
    </div>
  );
};