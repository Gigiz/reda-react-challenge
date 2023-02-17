import { PropsWithChildren } from "react"
import { ReactPortal } from "components/ReactPortal"
import { ModalContextProvider, useModal } from "context/ModalContext"
import { closeModalButton, modal, modalOverlay, openModalButton } from "./styles.css"

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
      <div className={openModalButton}>Open Modal</div>
    </button>
  )
}

const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { closeModal } = useModal()
  return (
    <div className={modalOverlay}>
      <div className={modal}>
        <div onClick={closeModal} className={closeModalButton}>
          &times;
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

const Root = ModalRoot
const Portal = ModalPortal
const Trigger = ModalTrigger
const Content = ModalContent

export { Root, Portal, Trigger, Content }
