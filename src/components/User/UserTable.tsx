import { useEffect, useState } from "react";
import  {userService}  from "../../services/userService";
import type { User } from "../../types/user.types";

const ITEMS_PER_PAGE = 5;

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAll();
        setUsers(data);
      } catch (err) {
        setError("No se pudo cargar la lista de usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Cálculo de paginación
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Username
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Name
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-sm text-gray-700">{user.id}</td>

                <td className="px-4 py-3 text-sm text-gray-700">
                  {user.username}
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
              ${
                user.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-sm text-gray-700">{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        {/* Botón Anterior */}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-md border
      ${
        currentPage === 1
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
      }
    `}
        >
          Anterior
        </button>

        {/* Indicador de página */}
        <span className="text-sm text-gray-600">
          Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
        </span>

        {/* Botón Siguiente */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-md border
      ${
        currentPage === totalPages
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
      }
    `}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

export default UserTable;
