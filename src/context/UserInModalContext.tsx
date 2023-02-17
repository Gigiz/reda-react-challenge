import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react"
import { User } from "vite-env"

export type UsersInModalContextType = {
  previousFetchedUser: User[]
  saveFetchedUsers: Dispatch<SetStateAction<User[]>>
  clearFetchedUsers: VoidFunction
}

export const UsersInModalContext = createContext<UsersInModalContextType>({
  previousFetchedUser: [],
  saveFetchedUsers: () => {},
  clearFetchedUsers: () => {},
})

export const UsersInModalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [previousFetchedUser, saveFetchedUsers] = useState<User[]>([])

  return (
    <UsersInModalContext.Provider
      value={{
        previousFetchedUser,
        saveFetchedUsers,
        clearFetchedUsers: () => saveFetchedUsers([]),
      }}
    >
      {children}
    </UsersInModalContext.Provider>
  )
}

export const usePreviousUsersInModal = () => {
  return useContext(UsersInModalContext)
}
