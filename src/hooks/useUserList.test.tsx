import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest"
import { renderHook, waitFor } from "@testing-library/react"
import { setupServer } from "msw/node"
import { rest } from "msw"

import { User } from "vite-env"
import { ActionKind, useUserList } from "./useUserList"

const users = [
  {
    id: 123,
    uid: "user-id",
    first_name: "Pippo",
    last_name: "Franco",
    username: "pippo.franco",
    email: "pippo.franco@test.com",
  },
]

export const restHandlers = [
  rest.get("https://random-data-api.com/api/users/random_user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users))
  }),
]

const server = setupServer(...restHandlers)

const emptyInitialData: User[] = []

describe("useUserList", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  it("should remains in IDLE state when no users are requested", () => {
    const { result } = renderHook(() => useUserList(0, emptyInitialData))
    expect(result.current.status).toStrictEqual(ActionKind.IDLE)
  })
  it("should retrieve users", async () => {
    const { result } = renderHook(() => useUserList(2, emptyInitialData))
    expect(result.current.status).toStrictEqual(ActionKind.FETCHING)
    await waitFor(() => {
      expect(result.current.status).toStrictEqual(ActionKind.FETCHED)
      expect(result.current.data.length).toStrictEqual(1)
      expect(result.current.error).toBeNull()
    })
  })
  it("should got too many user requested error", async () => {
    const { result } = renderHook(() => useUserList(21, emptyInitialData))
    await waitFor(() => {
      expect(result.current.status).toStrictEqual(ActionKind.ERROR)
      expect(result.current.data.length).toStrictEqual(0)
      expect(result.current.error).toStrictEqual("too many users requested")
    })
  })
})
