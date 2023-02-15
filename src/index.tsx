import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <div>Hello Vite!</div>
    </StrictMode>
  )
}
