// src/pages/users/UserModule.tsx
import { useState } from "react";
import UserList from "./UserList";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserDelete from "./UserDelete";

type View = "list" | "create" | "edit" | "delete";

export default function UserModule() {
  const [view, setView] = useState<View>("list");

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      {/* Acciones */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setView("list")}>Lista</button>
        <button onClick={() => setView("create")}>Incluir</button>
        <button onClick={() => setView("edit")}>Modificar</button>
        <button onClick={() => setView("delete")}>Eliminar</button>
      </div>

      {/* Contenido */}
      {view === "list" && <UserList />}
      {view === "create" && <UserCreate />}
      {view === "edit" && <UserEdit />}
      {view === "delete" && <UserDelete />}
    </div>
  );
}