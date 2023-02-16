import { PropsWithChildren } from "react"
import { ReactPortal } from "./ReactPortal"
import { ModalContextProvider, useModal } from "context/ModalContext"

const ModalRoot: React.FC<PropsWithChildren> = ({ children }) => (
  <ModalContextProvider>{children}</ModalContextProvider>
)

const ModalPortal: React.FC<PropsWithChildren> = ({ children }) => {
  const { isModalOpen } = useModal()

  if (!isModalOpen) {
    return null
  }

  return <ReactPortal wrapperId="react-portal-user-modal-root">{children}</ReactPortal>
}

const ModalTrigger: React.FC = () => {
  const { toggleModal } = useModal()
  return <button onClick={toggleModal}>Open Modal</button>
}

const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>
}

const Root = ModalRoot
const Portal = ModalPortal
const Trigger = ModalTrigger
const Content = ModalContent

export { Root, Portal, Trigger, Content }
