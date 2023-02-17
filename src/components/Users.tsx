import { useCurrentUsersInModal } from "context/UserInModalContext"
import { ActionKind, useUserList } from "hooks/useUserList"
import { useEffect, useRef, useState } from "react"
import { User } from "vite-env"

const defaultSizeValue = 10

function parseUserSize(sizeString: string | undefined): number {
  if (typeof sizeString === "undefined") {
    return defaultSizeValue
  }
  const parsedSizeInNumber = parseInt(sizeString)
  if (isNaN(parsedSizeInNumber)) {
    return defaultSizeValue
  }
  return parsedSizeInNumber
}

export const Users: React.FC = () => {
  const sizeInputRef = useRef<HTMLInputElement>(null)
  const { users, setUsers } = useCurrentUsersInModal()
  const { status, data, error } = useUserList(parseUserSize(sizeInputRef.current?.value), users)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    if (status === ActionKind.FETCHED) {
      setUsers(data)
    }
  }, [data])

  return (
    <div>
      <input ref={sizeInputRef} defaultValue={defaultSizeValue} type="text" />
      <button onClick={() => setUsers([])}>Refetch</button>
      <div
        style={{
          display: "flex",
          padding: 24,
          height: 198,
          justifyContent: "center",
          margin: "24px 0",
          border: "1px solid whitesmoke",
        }}
      >
        {selectedUser ? (
          <>
            <img loading="lazy" width={150} height={150} src={selectedUser.avatar.toString()} />
            <ul style={{ alignSelf: "center" }}>
              <li>
                Name: {selectedUser.first_name} {selectedUser.last_name}
              </li>
              <li>Email: {selectedUser.email}</li>
              <li>Username: {selectedUser.username}</li>
            </ul>
          </>
        ) : (
          <h3 style={{ alignSelf: "center" }}>Please, select an user</h3>
        )}
      </div>
      {(() => {
        switch (status) {
          case ActionKind.FETCHING:
            return <div>Loading...</div>
          case ActionKind.ERROR:
            return <div>An error {error}</div>
          default:
            return (
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gridRowGap: ".5em",
                  gridColumnGap: "1em",
                }}
              >
                {data.map((user, index) => {
                  return (
                    <div
                      style={{
                        cursor: "pointer",
                        minWidth: 100,
                        border: "1px solid red",
                        backgroundColor: "red",
                        color: "white",
                      }}
                      onClick={() => setSelectedUser(user)}
                      key={index}
                    >
                      {user.first_name}
                    </div>
                  )
                })}
              </div>
            )
        }
      })()}
    </div>
  )
}
