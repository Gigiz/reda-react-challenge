import { PropsWithChildren } from "react"
import { ReactPortal } from "../ReactPortal"
import { ModalContextProvider, useModal } from "context/ModalContext"
import { button, modal } from "./styles.css"

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
  return (
    <button onClick={toggleModal}>
      <div className={button}>Open Modal</div>
    </button>
  )
}

const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={modal}>{children}</div>
}

const Root = ModalRoot
const Portal = ModalPortal
const Trigger = ModalTrigger
const Content = ModalContent

export { Root, Portal, Trigger, Content }
