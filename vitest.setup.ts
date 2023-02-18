import { expect, afterEach } from "vitest"
import { cleanup } from "@testing-library/react"
import matchers from "@testing-library/jest-dom/matchers"
import  { fetch } from "cross-fetch"

global.fetch = fetch

afterEach(() => {
  cleanup()
})

expect.extend(matchers)
