import { useState, useLayoutEffect, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

type ReactPortalProps = PropsWithChildren & { wrapperId: string }

export const ReactPortal: React.FC<ReactPortalProps> = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = useState<Element | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let created = false
    if (!element) {
      created = true
      const wrapper = document.createElement("div")
      wrapper.setAttribute("id", wrapperId)
      document.body.appendChild(wrapper)
      element = wrapper
    }
    setWrapper(element)

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  return wrapper ? createPortal(children, wrapper) : null
}
