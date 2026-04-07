// src/pages/Dashboard.tsx
import UserList from "../components/User/UserList";
import UserTable from "../components/User/UserTable";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-slate-400">Resumen general del sistema</p>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Listado de Usuarios</h2>
        <UserTable />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Ventas" value="$ 12,430" hint="+12% vs mes pasado" />
        <Card title="Pedidos" value="328" hint="+8% vs semana pasada" />
        <Card title="Usuarios" value="1,245" hint="+3% vs ayer" />
        <Card title="Tickets" value="14" hint="2 urgentes" />
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-3">Últimos pedidos</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-slate-400">
                <tr className="border-b border-slate-800">
                  <th className="text-left py-2">#</th>
                  <th className="text-left py-2">Cliente</th>
                  <th className="text-left py-2">Estado</th>
                  <th className="text-right py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "A-1021",
                    name: "María",
                    status: "Pagado",
                    total: 120.5,
                  },
                  {
                    id: "A-1022",
                    name: "Juan",
                    status: "Pendiente",
                    total: 89.9,
                  },
                  {
                    id: "A-1023",
                    name: "Luisa",
                    status: "Enviado",
                    total: 210.0,
                  },
                ].map((row) => (
                  <tr key={row.id} className="border-b border-slate-800">
                    <td className="py-2">{row.id}</td>
                    <td className="py-2">{row.name}</td>
                    <td className="py-2">
                      <span
                        className={[
                          "px-2 py-1 rounded-full text-xs",
                          row.status === "Pagado"
                            ? "bg-emerald-900 text-emerald-200"
                            : "",
                          row.status === "Pendiente"
                            ? "bg-amber-900 text-amber-200"
                            : "",
                          row.status === "Enviado"
                            ? "bg-sky-900 text-sky-200"
                            : "",
                        ].join(" ")}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 text-right">${row.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-3">Actividad</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>✅ Nuevo usuario registrado</li>
            <li>📦 Producto actualizado</li>
            <li>🧾 Pedido A-1023 enviado</li>
            <li>⚠️ 2 tickets pendientes</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
      <div className="text-slate-400 text-sm">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      <div className="text-slate-500 text-xs mt-2">{hint}</div>
    </div>
  );
}
