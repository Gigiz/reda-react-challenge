import * as Modal from 'components/Modal'

import { hello } from "styles.css"

export const App: React.FC = () => {
  return (
    <div>
      <h2>Hello Vite!</h2>
      <hr />
      <Modal.Root>
        <Modal.Trigger />
        <Modal.Portal>
          <Modal.Content>
            <div>ciao modale</div>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  )
}
