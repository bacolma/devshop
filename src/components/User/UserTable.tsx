import { useEffect, useState } from 'react'
import { getUsers } from '../../services/userService'
import type { User } from '../../types/User'

const ITEMS_PER_PAGE = 5

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (err) {
        setError('No se pudo cargar la lista de usuarios')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Cálculo de paginación
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentUsers = users.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  if (loading) return <p>Cargando...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <>
      <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Status</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.status}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        <span style={{ margin: '0 10px' }}>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </>
  )
}

export default UserTable