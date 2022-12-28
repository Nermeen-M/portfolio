import { useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({modalState}){
    const[modal, setModal] = modalState;

    const HTMLElement = document.getElementById("portal");

    if (modal === null) return null;

    return createPortal(
    <div id="modal">
        <div className="backdrop" onClick={() => setModal(null)}></div>
        <div className="window">
            <button onClick={() => setModal(null)}>Close</button>
            {modal}
        </div>
    </div>,
    HTMLElement
    );
}