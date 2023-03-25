import { Dispatch, FC, SetStateAction } from 'react';
import './Modal.scss';

interface ModalProps {
  setShowPopup: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ setShowPopup }) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <button type={'button'} className="popup__close" onClick={() => setShowPopup(false)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
