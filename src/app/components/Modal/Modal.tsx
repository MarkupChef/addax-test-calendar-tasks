import React, { Dispatch, FC, SetStateAction } from 'react';
import './Modal.scss';

interface ModalProps {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ setShowPopup, children }) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <button type={'button'} className="popup__close" onClick={() => setShowPopup(false)}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
