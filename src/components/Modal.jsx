import { createPortal } from "react-dom";

import CloseButton from "../assets/images/close-btn.svg";

export default function Modal({ modalState }) {
  const [modal, setModal] = modalState;

  const HTMLElement = document.getElementById("portal");

  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="backdrop" onClick={() => setModal(null)}></div>
      <div className="window animate-fade-in">
        <button onClick={() => setModal(null)} className="modal-close-button">
          <img src={CloseButton} alt="Close" />
        </button>
        {modal}
      </div>
    </div>,
    HTMLElement
  );
}
