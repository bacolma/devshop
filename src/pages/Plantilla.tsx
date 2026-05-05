import { useState } from "react";

const teams = [
  { code: "BRA", name: "Brasil", flag: "https://flagcdn.com/w80/br.png" },
  { code: "ARG", name: "Argentina", flag: "https://flagcdn.com/w80/ar.png" },
];

export default function MatchGoalsTemplate() {
  const [goalsLocal, setGoalsLocal] = useState(1);
  const [goalsAway, setGoalsAway] = useState(2);
  const [notes, setNotes] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">
        Mundial 2026 – Registro de Goles
      </h1>

      <div className="grid grid-cols-3 items-start text-center gap-4">
        {/* Equipo Local */}
        <div className="flex flex-col items-center">
          <img src={teams[0].flag} alt={teams[0].name} className="w-20 mb-2" />
          <span className="font-semibold mb-3">{teams[0].name}</span>
          <select
            className="border border-slate-300 rounded px-4 py-2 bg-white text-black"
            value={goalsLocal}
            onChange={(e) => setGoalsLocal(Number(e.target.value))}
          >
            {Array.from({ length: 11 }).map((_, i) => (
              <option key={i} value={i} className="text-black">
                {i}
              </option>
            ))}
          </select>
          <span className="text-sm text-slate-500 mt-1">Goles</span>
        </div>

        {/* Marcador centrado */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl font-bold leading-none">
            {goalsLocal} : {goalsAway}
          </div>
          <div className="text-slate-500 mt-2">Resultado parcial</div>
        </div>

        {/* Equipo Visitante */}
        <div className="flex flex-col items-center">
          <img src={teams[1].flag} alt={teams[1].name} className="w-20 mb-2" />
          <span className="font-semibold mb-3">{teams[1].name}</span>
          <select
            className="border border-slate-300 rounded px-4 py-2 bg-white text-black"
            value={goalsAway}
            onChange={(e) => setGoalsAway(Number(e.target.value))}
          >
            {Array.from({ length: 11 }).map((_, i) => (
              <option key={i} value={i} className="text-black">
                {i}
              </option>
            ))}
          </select>
          <span className="text-sm text-slate-500 mt-1">Goles</span>
        </div>
      </div>

      {/* Observaciones */}
      <div className="mt-8">
        <label className="block font-semibold mb-2">Observaciones</label>
        <textarea
          className="w-full border border-slate-300 rounded p-3 bg-white text-black"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notas del partido..."
        />
      </div>
    </div>
  );
}
