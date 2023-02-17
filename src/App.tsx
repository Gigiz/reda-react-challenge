import * as Modal from "components/Modal"
import { Users } from "components/Users"
import { UsersInModalContextProvider } from "context/UserInModalContext"

import { hello } from "styles.css"

export const App: React.FC = () => {
  return (
    <div>
      <h2>Hello Vite!</h2>
      <hr />
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
