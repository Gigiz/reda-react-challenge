import { createContext, PropsWithChildren, useContext, useState } from "react"

export type ModalContextType = {
  isModalOpen: boolean
  closeModal: VoidFunction
  openModal: VoidFunction
  toggleModal: VoidFunction
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  closeModal: () => {},
  openModal: () => {},
  toggleModal: () => {},
})

export const ModalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isOpen,
        closeModal: () => setIsOpen(false),
        openModal: () => setIsOpen(true),
        toggleModal: () => setIsOpen((prevIsOpen) => !prevIsOpen),
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
