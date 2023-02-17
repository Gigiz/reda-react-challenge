import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react"
import { User } from "vite-env"

export type UsersInModalContextType = {
  users: User[]
  setUsers: Dispatch<SetStateAction<User[]>>
}

export const UsersInModalContext = createContext<UsersInModalContextType>({
  users: [],
  setUsers: () => {},
})

export const UsersInModalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentUsersInModal, setCurrentUsersInModal] = useState<User[]>([])

  return (
    <UsersInModalContext.Provider
      value={{
        users: currentUsersInModal,
        setUsers: setCurrentUsersInModal,
      }}
    >
      {children}
    </UsersInModalContext.Provider>
  )
}

export const useCurrentUsersInModal = () => {
  return useContext(UsersInModalContext)
}
