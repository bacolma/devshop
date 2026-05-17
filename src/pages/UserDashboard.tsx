import React from "react";
import { Link, NavLink } from "react-router-dom";

type Template = {
  id: string;
  nombre: string;
  fechaCreacion: string; // ejemplo: "3/5/2026"
};

const templatesMock: Template[] = [
  { id: "1", nombre: "Mundial Rimac 2026", fechaCreacion: "3/5/2026" },
  { id: "2", nombre: "Juegos con gaudys", fechaCreacion: "3/5/2026" },
];

const TemplateCard = ({ template }: { template: Template }) => {
  return (
    <div className="w-full max-w-xl rounded-xl border border-gray-300 bg-white shadow-sm">
      {/* franja superior (verde + mostaza) */}
      <div
        className="h-3 rounded-t-xl"
        style={{
          background:
            "linear-gradient(90deg, #16a34a 0%, #16a34a 55%, #d39b06 55%, #d39b06 100%)",
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font700 font-bold text-gray-900">
          {template.nombre}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Creada el {template.fechaCreacion}
        </p>

        <Link
          to={`/plantillas/${template.id}`}
          className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
        >
          Ver predicciones y clasificación
          <span aria-hidden="true" className="text-lg leading-none">
            ›
          </span>
        </Link>
      </div>
    </div>
  );
};

export default function UserDashboard() {
  return (
    <div>
      {/* Contenido */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900">Mis Plantillas</h1>
        <p className="mt-2 text-gray-500">
          Selecciona una plantilla para ingresar tus predicciones
        </p>

        {/* Cards */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {templatesMock.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </section>
      </main>
    </div>
  );
}
