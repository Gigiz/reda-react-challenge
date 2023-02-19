import { useCallback, useEffect } from "react"

export const useEscapeKey = (handleClose: any) => {
  const handleEscKey = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener("keyup", handleEscKey, false)

    return () => {
      document.removeEventListener("keyup", handleEscKey, false)
    }
  }, [handleEscKey])
}
