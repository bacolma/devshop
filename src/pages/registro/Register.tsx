import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";


export const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nombre, email, password });

    try {
      const response = await register({
        nombre,
        email,
        password,
      });

      if (response.success) {
        // puedes mostrar mensaje
        alert("Usuario registrado correctamente");

        // redirigir a login
        navigate("/login");
      }
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-900 to-green-700">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mx-auto mb-4 h-16 w-16 rounded-full grid place-items-center">
          {/* Si tienes un icono real, reemplaza por <img src="/ball.png" ... /> */}
          <span className="text-5xl leading-none drop-shadow">⚽</span>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-white">Mundial 2026</h1>
        <p className="text-green-200 mb-6">Crea tu cuenta</p>

        {/* Card */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md text-left">
          <h2 className="text-xl font-semibold mb-6">Registro</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Contraseña</label>
              <input
                type="password"
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
            >
              Crear Cuenta
            </button>
          </form>

          {/* Link login */}
          <p className="text-center text-sm mt-4">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-green-700 font-semibold">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
