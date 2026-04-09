import UserTable from "../../components/User/UserTable";

export default function UserList() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h1 className="text-2xl font-semibold">Consultar Usuarios</h1>
      <p className="text-slate-400 mt-2">Página de consulta de usuarios.</p>
      <div style={{ padding: "20px" }}>
        <h2>Listado de Usuarios</h2>
        <UserTable />
      </div>
    </div>
  );
}
