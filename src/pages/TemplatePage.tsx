import React from "react";
import { TemplateList } from "../components/templates/templateList";
import { TemplateButton } from "../components/templates/templateButton";

export default function TemplatePage() {
  const template = [
    {
      id: 1,
      nombre: "Mundial Familia Colchado Ramirez 2026",
      fecha: "14/5/2026",
    },
    {
      id: 2,
      nombre: "Mundial Rimac 2026",
      fecha: "7/5/2026",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Plantillas</h1>
          <p className="text-gray-500">{template.length} plantillas creadas</p>
        </div>

        <TemplateButton />
      </div>

      {/* Lista */}
      <TemplateList template={template} />
    </div>
  );
};
``