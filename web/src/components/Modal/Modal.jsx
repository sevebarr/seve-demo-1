import React, { useState } from "react"
import "./Modal.css";

export const Modal = ({ buttonText, children }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="ModalShowButton" onClick={() => setShowModal(true)}>{buttonText}</button>
            {showModal && (
                <div className="ModalBackground" onClick={() => setShowModal(false)}>
                    <div className="Modal" onClick={e => e.stopPropagation()}>
                        <button className="ModalHideButton" onClick={() => setShowModal(false)}>X</button>
                        <div className="ModalBody">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal