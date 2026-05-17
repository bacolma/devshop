import React from "react";

interface Equipo {
  nombre: string;
  pj: number;
  g: number;
  e: number;
  p: number;
  dif: number;
  pts: number;
}

interface Props {
  equipos: Equipo[];
}

export const TablaGrupo: React.FC<Props> = ({ equipos }) => {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-gray-600 text-left">
          <th className="py-2">Equipo</th>
          <th>PJ</th>
          <th>G</th>
          <th>E</th>
          <th>P</th>
          <th>Dif</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {equipos.map((eq, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 font-medium">{eq.nombre}</td>
            <td>{eq.pj}</td>
            <td>{eq.g}</td>
            <td>{eq.e}</td>
            <td>{eq.p}</td>
            <td>{eq.dif}</td>
            <td className="font-bold text-green-600">{eq.pts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
