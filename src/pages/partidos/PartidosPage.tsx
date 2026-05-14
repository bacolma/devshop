import React, { useMemo } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

type FaseKey =
  | "grupos"
  | "dieciseisavos"
  | "octavos"
  | "cuartos"
  | "semifinal"
  | "tercer-lugar"
  | "final";

type GrupoKey =
  | "todos"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L";

type Partido = {
  id: string;
  fase: FaseKey;
  grupo?: Exclude<GrupoKey, "todos">; // solo aplica en fase de grupos
  fechaLabel: string; // ej: "jue, 11 jun,"
  horaLabel: string; // ej: "11:00"
  local: string;
  visita: string;
  jugado: boolean;
};

const FASES: Array<{ key: FaseKey; label: string; total: number }> = [
  { key: "grupos", label: "Fase de Grupos", total: 72 },
  { key: "dieciseisavos", label: "Dieciseisavos", total: 16 },
  { key: "octavos", label: "Octavos de Final", total: 8 },
  { key: "cuartos", label: "Cuartos de Final", total: 4 },
  { key: "semifinal", label: "Semifinal", total: 2 },
  { key: "tercer-lugar", label: "Tercer Lugar", total: 1 },
  { key: "final", label: "Final", total: 1 },
];

const GRUPOS: Array<{ key: GrupoKey; label: string }> = [
  { key: "todos", label: "Todos" },
  { key: "A", label: "Grupo A" },
  { key: "B", label: "Grupo B" },
  { key: "C", label: "Grupo C" },
  { key: "D", label: "Grupo D" },
  { key: "E", label: "Grupo E" },
  { key: "F", label: "Grupo F" },
  { key: "G", label: "Grupo G" },
  { key: "H", label: "Grupo H" },
  { key: "I", label: "Grupo I" },
  { key: "J", label: "Grupo J" },
  { key: "K", label: "Grupo K" },
  { key: "L", label: "Grupo L" },
];

// Demo data (puedes reemplazar por tu API o JSON real)
const PARTIDOS: Partido[] = [
  // Grupo A (como en tu imagen)
  {
    id: "A-1",
    fase: "grupos",
    grupo: "A",
    fechaLabel: "jue, 11 jun,",
    horaLabel: "11:00",
    local: "Estados Unidos",
    visita: "Países Bajos",
    jugado: false,
  },
  {
    id: "A-2",
    fase: "grupos",
    grupo: "A",
    fechaLabel: "jue, 11 jun,",
    horaLabel: "14:00",
    local: "Senegal",
    visita: "Costa Rica",
    jugado: false,
  },
  {
    id: "A-3",
    fase: "grupos",
    grupo: "A",
    fechaLabel: "mié, 17 jun,",
    horaLabel: "08:00",
    local: "Estados Unidos",
    visita: "Senegal",
    jugado: false,
  },
  {
    id: "A-4",
    fase: "grupos",
    grupo: "A",
    fechaLabel: "mié, 17 jun,",
    horaLabel: "17:00",
    local: "Países Bajos",
    visita: "Costa Rica",
    jugado: false,
  },
  {
    id: "A-5",
    fase: "grupos",
    grupo: "A",
    fechaLabel: "mar, 23 jun,",
    horaLabel: "11:00",
    local: "Costa Rica",
    visita: "Estados Unidos",
    jugado: false,
  },
  {
    id: "A-6",
    fase: "grupos",
    grupo: "A",
    fechaLabel: "mar, 23 jun,",
    horaLabel: "14:00",
    local: "Países Bajos",
    visita: "Senegal",
    jugado: false,
  },

  // Ejemplos otras fases (si navegas)
  {
    id: "OCT-1",
    fase: "octavos",
    fechaLabel: "sáb, 04 jul,",
    horaLabel: "16:00",
    local: "1A",
    visita: "2B",
    jugado: false,
  },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function classNames(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export default function PartidosPage() {
  const params = useParams<{ fase?: FaseKey }>();
  const fase: FaseKey = (params.fase as FaseKey) || "grupos";

  const query = useQuery();
  const navigate = useNavigate();

  const grupoQueryRaw = (query.get("grupo") || "todos").toUpperCase();
  const grupo: GrupoKey =
    grupoQueryRaw === "TODOS"
      ? "todos"
      : (grupoQueryRaw as Exclude<GrupoKey, "todos">);

  const partidosFase = useMemo(
    () => PARTIDOS.filter((p) => p.fase === fase),
    [fase]
  );

  // Contadores por fase (jugados/total)
  const faseCounts = useMemo(() => {
    const map: Record<FaseKey, { jugados: number; total: number }> = {} as any;

    for (const f of FASES) {
      const partidosDeFase = PARTIDOS.filter((p) => p.fase === f.key);
      const jugados = partidosDeFase.filter((p) => p.jugado).length;
      map[f.key] = { jugados, total: f.total };
    }
    return map;
  }, []);

  // Total jugados/total (para el subtítulo)
  const totalGlobal = useMemo(() => {
    const total = 104; // en tu UI aparece 104 total (puedes calcular real si quieres)
    const jugados = PARTIDOS.filter((p) => p.jugado).length;
    return { jugados, total };
  }, []);

  const partidosFiltrados = useMemo(() => {
    if (fase !== "grupos") return partidosFase;
    if (grupo === "todos") return partidosFase;
    return partidosFase.filter((p) => p.grupo === grupo);
  }, [fase, grupo, partidosFase]);

  // Agrupar por grupo (solo fase grupos)
  const partidosPorGrupo = useMemo(() => {
    if (fase !== "grupos") return null;

    const grouped: Record<string, Partido[]> = {};
    for (const p of partidosFiltrados) {
      const g = p.grupo || "—";
      grouped[g] = grouped[g] || [];
      grouped[g].push(p);
    }

    // Ordenar por letra
    const keys = Object.keys(grouped).sort();
    return keys.map((k) => ({ grupo: k, partidos: grouped[k] }));
  }, [fase, partidosFiltrados]);

  const onChangeGrupo = (g: GrupoKey) => {
    const sp = new URLSearchParams(query.toString());
    sp.set("grupo", g === "todos" ? "todos" : g);
    navigate({ search: sp.toString() }, { replace: false });
  };

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Gestión de Resultados
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {totalGlobal.jugados} de {totalGlobal.total} partidos jugados en total
          </p>
        </div>

        {/* Tabs de fases */}
        <div className="flex flex-wrap gap-3">
          {FASES.map((f) => {
            const c = faseCounts[f.key];
            return (
              <NavLink
                key={f.key}
                to={`/home/resultados/${f.key}${f.key === "grupos" ? `?grupo=${grupo}` : ""}`}
                className={({ isActive }) =>
                  classNames(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    "border border-transparent",
                    isActive
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )
                }
              >
                {f.label}{" "}
                <span className={classNames("ml-1 font-bold", f.key === fase ? "text-white/90" : "text-slate-500")}>
                  ({c?.jugados ?? 0}/{f.total})
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Chips de grupos (solo fase de grupos) */}
        {fase === "grupos" && (
          <div className="mt-5 flex flex-wrap gap-3">
            {GRUPOS.map((g) => {
              const active = g.key === grupo;
              return (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => onChangeGrupo(g.key)}
                  className={classNames(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-transparent text-slate-600 hover:bg-slate-100"
                  )}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Línea separadora */}
        <div className="mt-6 h-px w-full bg-slate-100" />

        {/* Contenido */}
        <div className="mt-6 space-y-10">
          {fase === "grupos" ? (
            <>
              {(partidosPorGrupo || []).length === 0 ? (
                <EmptyState />
              ) : (
                (partidosPorGrupo || []).map((sec) => (
                  <SectionGrupo
                    key={sec.grupo}
                    titulo={`Grupo ${sec.grupo}`}
                    partidos={sec.partidos}
                  />
                ))
              )}
            </>
          ) : (
            <>
              {partidosFiltrados.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="space-y-4">
                  {partidosFiltrados.map((p) => (
                    <CardPartido key={p.id} partido={p} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionGrupo({
  titulo,
  partidos,
}: {
  titulo: string;
  partidos: Partido[];
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="h-5 w-1 rounded-full bg-emerald-600" />
        <h2 className="text-base font-extrabold text-slate-800">{titulo}</h2>
      </div>

      <div className="space-y-4">
        {partidos.map((p) => (
          <CardPartido key={p.id} partido={p} />
        ))}
      </div>
    </section>
  );
}

function CardPartido({ partido }: { partido: Partido }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        {/* Fecha/Hora */}
        <div className="min-w-[86px] text-xs font-semibold text-slate-400">
          <div className="leading-4">{partido.fechaLabel}</div>
          <div className="leading-4">{partido.horaLabel}</div>
        </div>

        {/* Equipos */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-extrabold text-slate-900">{partido.local}</span>
            <span className="font-bold text-slate-400">vs</span>
            <span className="font-extrabold text-slate-900">{partido.visita}</span>
          </div>
        </div>

        {/* Botón */}
        <button
          type="button"
          className={classNames(
            "rounded-lg px-4 py-2 text-sm font-bold transition",
            "bg-amber-50 text-amber-700 hover:bg-amber-100"
          )}
        >
          Resultado
        </button>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
      <div className="text-sm font-semibold text-slate-600">
        No hay partidos para mostrar con los filtros actuales.
      </div>
      <div className="mt-1 text-xs text-slate-500">
        Cambia la fase o el grupo para ver resultados.
      </div>
    </div>
  );
}
