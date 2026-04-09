import UserForm from "../../components/User/UserForm";

export default function UserCreate() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h1 className="text-2xl font-semibold">Inclusion Usuarios</h1>
      <p className="text-slate-400 mt-2">Página de Inclusion de usuarios.</p>
      <div style={{ padding: "20px" }}>
        <h2>Incluir Usuario</h2>
        <UserForm />
      </div>
    </div>
  );
}
