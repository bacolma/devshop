import React from "react";
import { TemplateCard } from "./templateCard";

interface Template {
  id: number;
  nombre: string;
  fecha: string;
}

interface Props {
  template: Template[];
}

export const TemplateList: React.FC<Props> = ({ template }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {template.map((p) => (
        <TemplateCard
          key={p.id}
          nombre={p.nombre}
          fecha={p.fecha}
          onGestionar={() => console.log("Gestionar", p.id)}
          onEliminar={() => console.log("Eliminar", p.id)}
        />
      ))}
    </div>
  );
};