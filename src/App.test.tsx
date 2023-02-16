import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { App } from "./App"
describe("<App />", () => {
  it("should be render", () => {
    render(<App />)

    expect(screen.getByText("Hello Vite!")).toBeInTheDocument()
  })
})
