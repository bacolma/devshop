import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Input} from "./Input";
import {Button} from "./Button";
import { login } from "../services/authService";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.token);
      ///alert("Login exitoso");
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded">
      <h2 className="text-xl mb-4 text-center">Login</h2>

      <Input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <Button text="Ingresar" onClick={handleSubmit} />
    </div>
  );
};
