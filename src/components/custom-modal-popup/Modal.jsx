import './Modal.css';

export default function Modal({onClose, header, body, footer}) {
  return (
    <>
      <div className="modal-content">
      <span onClick={onClose}  className="close-modal-icon">&times;</span>
        <div className="modal-header">
        <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="modal-body">
            <h2>{body ? body : "Body Content"}</h2>
        </div>
        <div className="modal-footer">
           <h2>{footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </>
  )
}
