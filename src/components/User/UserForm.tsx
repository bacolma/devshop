import { useState } from "react";
import { UserForms } from "../../types/user.types";
import { Input } from "../Input";
import { Select } from "../Select";

export default function UserForm() {
  const [form, setForm] = useState<UserForms>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    status: "ACTIVE",
    emailverified: "NO",
    lastlogin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validación básica
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Usuario a insertar:", form);

    // Aquí iría el POST a la API
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
      <h1 className="text-xl font-semibold mb-6">Crear Usuario</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <Input
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        {/* Username */}
        <Input
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        {/* Email */}
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        {/* Password */}
        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        {/* Confirm Password */}
        <Input
          label="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {/* Estado */}
        <Select
          label="Estado"
          name="status"
          value={form.status}
          onChange={handleChange}
          options={[
            { label: "Activo", value: "ACTIVE" },
            { label: "Inactivo", value: "INACTIVE" },
          ]}
        />

        {/* Email Verified */}
        <Select
          label="Email verificado"
          name="emailverified"
          value={form.emailverified}
          onChange={handleChange}
          options={[
            { label: "si", value: "SI" },
            { label: "no", value: "NO" },
          ]}
        />

        {/* Último Login */}
        <Input
          label="Último login"
          name="lastlogin"
          type="datetime-local"
          value={form.lastlogin}
          onChange={handleChange}
        />

        {/* Botones */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="reset"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            onClick={() =>
              setForm({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
                status: "ACTIVE",
                emailverified: "NO",
                lastlogin: "",
              })
            }
          >
            Limpiar
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
