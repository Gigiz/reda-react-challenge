import { RefObject, useCallback, useEffect } from "react"

export const useClickOutside = (handleClose: any, ref: RefObject<HTMLDivElement>) => {
  const handleClick = useCallback(
    (event: any) => {
      if (ref?.current?.contains && !ref.current.contains(event.target)) {
        handleClose()
      }
    },
    [handleClose, ref]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [handleClick])
}
