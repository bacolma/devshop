import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import { login } from "../services/authService";

export const LoginForm = () => {
  const [username, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     console.log("submit ejecutado");
    try {
      const response = await login({ username, password });
      const { token } = await login({
        username,
        password,
      });

      localStorage.setItem("token", token);
      if (token) {
        navigate("/contable");
      }
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-login flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        {/* Header superior */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full grid place-items-center">
            {/* Si tienes un icono real, reemplaza por <img src="/ball.png" ... /> */}
            <span className="text-5xl leading-none drop-shadow">⚽</span>
          </div>

          <h1 className="text-white text-4xl font-extrabold tracking-tight">
            Mundial 2026
          </h1>
          <p className="mt-2 text-emerald-200/90 text-lg">
            Sistema de Predicciones
          </p>
        </div>

        {/* Card blanca */}
        <div className="bg-white/95 rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
            Iniciar Sesión
          </h2>

          <form className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <Input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder-slate-400 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Contraseña
              </label>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder-slate-400 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
              />
            </div>

            {/* Botón */}
            <Button 
              text="Ingresar" 
              onClick={handleSubmit} 
              className="w-full rounded-lg bg-emerald-700 py-3.5 font-bold text-white shadow-md transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300"
             />
           

            {/* Link registro */}
            <p className="text-center text-slate-600">
              ¿No tienes cuenta?{" "}
              <a
                href="/register"
                className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
              >
                Regístrate aquí
              </a>
            </p>
          </form>
        </div>

        {/* Card Admin (glass) */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-emerald-950/25 backdrop-blur-md shadow-xl px-6 py-5">
          <p className="text-center text-emerald-200 font-extrabold tracking-wider">
            ACCESO ADMINISTRADOR
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-center">
            <div>
              <p className="text-emerald-200/90 text-sm font-semibold">
                Usuario
              </p>
              <p className="mt-1 text-white font-bold">admin@test.com</p>
            </div>

            <div>
              <p className="text-emerald-200/90 text-sm font-semibold">
                Contraseña
              </p>
              <p className="mt-1 text-white font-bold">12345678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
