interface Props {
  nombre: string;
  onEntrar: () => void;
}

export const UserPlantillaCard: React.FC<Props> = ({
  nombre,
  onEntrar,
}) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm w-full max-w-sm">
      <h3 className="font-semibold text-gray-800 mb-3">{nombre}</h3>

      <button
        onClick={onEntrar}
        className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700"
      >
        Entrar
      </button>
    </div>
  );
};
``