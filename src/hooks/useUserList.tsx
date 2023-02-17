import { useEffect, useReducer } from "react"

export type User = {
  id: number
  uuid: string
  first_name: string
  last_name: string
  username: string
  email: string
  avatar: URL
}

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

export const useUserList = (size: number) => {
  const initialState: UserState = {
    status: ActionKind.IDLE,
    error: null,
    data: [],
  }

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

  useEffect(() => {
    let revokeRequest = false

    if (size > 20) {
      dispatch({ type: ActionKind.ERROR, payload: "" })
    }

    const renderData = async () => {
      dispatch({ type: ActionKind.FETCHING })

      try {
        const res = await fetch(`https://random-data-api.com/api/users/random_user?size=${size}`)
        const data = await res.json()
        if (revokeRequest) return
        dispatch({ type: ActionKind.FETCHED, payload: data })
      } catch (error: any) {
        if (revokeRequest) return
        dispatch({ type: ActionKind.ERROR, payload: error.message })
      }
    }
    renderData()
    return () => {
      revokeRequest = true
    }
  }, [size])

  return state
}
