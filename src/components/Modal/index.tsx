import { PropsWithChildren, useRef } from "react"
import { ReactPortal } from "components/ReactPortal"
import { ModalContextProvider, useModal } from "context/ModalContext"
import { closeModalButton, modal, modalOverlay, openModalButton } from "./styles.css"
import { useClickOutside } from "hooks/useClickOutside"
import { useEscapeKey } from "hooks/useEscapeKey"

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
    <button className={openModalButton} onClick={toggleModal}>
      Random Users
    </button>
  )
}

const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { closeModal } = useModal()

  useClickOutside(closeModal, ref)
  useEscapeKey(closeModal)

  return (
    <div className={modalOverlay}>
      <div ref={ref} className={modal}>
        <button data-testid="close-modal" onClick={closeModal} className={closeModalButton}>
          &times;
        </button>
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
