import { useEffect, useReducer, useState } from "react"
import { User } from "vite-env"

export enum ActionKind {
  FETCHING = "FETCHING",
  FETCHED = "FETCHED",
  ERROR = "ERROR",
  IDLE = "IDLE",
}

type UserAction =
  | { type: ActionKind.FETCHING }
  | { type: ActionKind.FETCHED; payload: User[] }
  | { type: ActionKind.ERROR; payload: string }

type UserState = {
  status: ActionKind
  data: User[]
  error: string | null
}

export const useUserList = (size: number, options: { initialData: User[] }) => {
  const { initialData } = options

  const [initialState, setInitialState] = useState<UserState>({
    status: ActionKind.IDLE,
    error: null,
    data: initialData || [],
  })

  const [state, dispatch] = useReducer((state: UserState, action: UserAction) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: ActionKind.FETCHING }
      case "FETCHED":
        return { ...initialState, status: ActionKind.FETCHED, data: action.payload }
      case "ERROR":
        return { ...initialState, status: ActionKind.ERROR, error: action.payload }
      default:
        return state
    }
  }, initialState)

  const refetch = () => {
    setInitialState((prevInitialState) => ({
      ...prevInitialState,
      data: [],
    }))
  }

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    let revokeRequest = false
    const renderData = async () => {
      dispatch({ type: ActionKind.FETCHING })

      try {
        const res = await fetch(`https://random-data-api.com/api/users/random_user?size=${size}`, { signal })
        const data = await res.json()
        if (revokeRequest) return
        dispatch({ type: ActionKind.FETCHED, payload: data })
      } catch (error: any) {
        if (revokeRequest) return
        dispatch({ type: ActionKind.ERROR, payload: error.message })
      }
    }

    if (!initialState.data || (initialState.data.length === 0 && size > 0)) {
      size > 20 ? dispatch({ type: ActionKind.ERROR, payload: "too many users requested" }) : renderData()
    }

    return () => {
      revokeRequest = true
      controller.abort()
    }
  }, [size, initialState.data])

  return { ...state, refetch }
}
