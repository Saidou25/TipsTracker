// import button from "./button";

import "./ModalWindow.css";

const ModalWindow = ({ onConfirm, onClose }) => {
  return (
    <div className="modal-div">
      <div className="modal-confirmation">
        <h2 className="confirm-title text-black">Confirm Deletion</h2>
        <p className="confirm-text">Are you sure you want to delete your account?</p>
        <div className="row g-0">
          <button className="col-5 modal-btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="col-5 modal-btn" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
