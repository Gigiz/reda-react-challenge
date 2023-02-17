import * as Modal from "components/Modal"
import { Users } from "components/Users"
import { UsersInModalContextProvider } from "context/UserInModalContext"

import 'shared/styles/global.css'
import { container } from "styles.css"

export const App: React.FC = () => {
  return (
    <div className={container}>
      <UsersInModalContextProvider>
        <Modal.Root>
          <Modal.Trigger />
          <Modal.Portal>
            <Modal.Content>
              <Users />
            </Modal.Content>
          </Modal.Portal>
        </Modal.Root>
      </UsersInModalContextProvider>
    </div>
  )
}
