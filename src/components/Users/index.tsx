import { usePreviousUsersInModal } from "context/UserInModalContext"
import { ActionKind, useUserList } from "hooks/useUserList"
import { useEffect, useRef, useState } from "react"
import { calculateGridColumnByItemsNumber } from "shared/utils/gridSize"
import { User } from "vite-env"
import { buttonGroup, searchUsersButton, userProfile, userSearch } from "./styles.css"

const defaultSizeValue = 10

export const Users: React.FC = () => {
  const sizeInputRef = useRef<HTMLInputElement>(null)
  const { previousFetchedUser, clearFetchedUsers, saveFetchedUsers } = usePreviousUsersInModal()
  const { status, data, error } = useUserList(parseUserSize(sizeInputRef.current?.value), previousFetchedUser)
  const [selectedUser, setSelectedUser] = useState<User | null>(previousFetchedUser[0])

  useEffect(() => {
    if (status === ActionKind.FETCHED) {
      saveFetchedUsers(data)
      setSelectedUser(data[0])
    }
  }, [data])

  const gridSize = calculateGridColumnByItemsNumber(data.length)

  return (
    <div>
      <div className={userSearch}>
        <label htmlFor="users-number">Insert users' number to fetch</label>
        <input ref={sizeInputRef} id="users-number" defaultValue={defaultSizeValue} type="text" />
        <button className={searchUsersButton} onClick={clearFetchedUsers}>
          Refetch
        </button>
      </div>
      <div className={userProfile}>
        {selectedUser ? (
          <>
            <img loading="lazy" width={150} height={150} src={selectedUser.avatar.toString()} />
            <ul>
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
            return <div>{error}</div>
          default:
            return (
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                }}
              >
                {data.map((user, index) => {
                  return (
                    <button
                      data-testid="user-toggle-bar"
                      className={[buttonGroup, selectedUser?.uid === user.uid ? "active" : undefined].join(" ")}
                      onClick={() => setSelectedUser(user)}
                      key={index}
                    >
                      {user.first_name}
                    </button>
                  )
                })}
              </div>
            )
        }
      })()}
    </div>
  )
}

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
