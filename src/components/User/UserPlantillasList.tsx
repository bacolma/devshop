import { UserPlantillaCard } from "./UserPlantillaCard";

interface Plantilla {
  id: number;
  nombre: string;
}

interface Props {
  plantillas: Plantilla[];
}

export const UserPlantillasList: React.FC<Props> = ({ plantillas }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {plantillas.map((p) => (
        <UserPlantillaCard
          key={p.id}
          nombre={p.nombre}
          onEntrar={() => console.log("Entrar", p.id)}
        />
      ))}
    </div>
  );
};
