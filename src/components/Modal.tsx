import { IModal } from "../interfaces/modal.interface"

const Modal = ({isOpen, children, closeModal}:IModal) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-content">
        <div className="modal-hedaer">
          <a className="accon-btn" onClick={closeModal}>X</a>
        </div>
        <div className="modal-body">
          {children()}
        </div>
      </div>
    </div>
  )
}

export default Modal