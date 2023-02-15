import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import { hello } from "styles.css"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <div className={hello}>Hello Vite!</div>
    </StrictMode>
  )
}
