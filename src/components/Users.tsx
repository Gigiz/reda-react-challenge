import { useCurrentUsersInModal } from "context/UserInModalContext"
import { ActionKind, useUserList } from "hooks/useUserList"
import { useEffect, useState } from "react"

export const Users: React.FC = () => {
  const [size, setSize] = useState(2)
  console.log(size)
  const { users, setUsers } = useCurrentUsersInModal()
  const { status, data, error } = useUserList(size || 10, users)

  useEffect(() => {
    if (status === ActionKind.FETCHED) {
      console.log('new users')
      setUsers(data)
    }
  }, [data])

  if (status === ActionKind.FETCHING) {
    return <div>Loading</div>
  }

  if (status === ActionKind.ERROR && error) {
    return <div>An error {error}</div>
  }

  return (
    <div>
      {data.map((user, index) => {
        return <div key={index}>{user.email}</div>
      })}
      <input value={size} onChange={(e) => setSize(e.currentTarget.value)} type="text" />
      <button onClick={() => setUsers([])}>Refetch</button>
    </div>
  )
}
