import "./DeleteConfirmModal.css";

function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="delete-confirm-modal__overlay">
      <div className="delete-confirm-modal">
        <div className="delete-confirm-modal__content">
          <h2 className="delete-confirm-modal__title">
            Are you sure you want to delete this item?
          </h2>
          <p className="delete-confirm-modal__text">
            This action is irreversible.
          </p>
        </div>
        <div className="delete-confirm-modal__buttons">
          <button className="delete-confirm-modal__confirm" onClick={onConfirm}>
            Yes, Delete Item
          </button>
          <button className="delete-confirm-modal__cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
