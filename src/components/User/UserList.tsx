import { useEffect, useState } from 'react'
import { getUsers } from '../../services/userService'
import type { User } from '../../types/User'

interface UserListProps {
  filter?: string
}

const UserList = ({ filter = '' }: UserListProps) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await getUsers(filter)
        setUsers(data)
      } catch (err) {
        setError('No se pudieron cargar los usuarios')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [filter])

  if (loading) return <p>Cargando usuarios...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  )
}

export default UserList