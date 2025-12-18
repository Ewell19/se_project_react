import { useEffect } from "react";
import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDeleteCard }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDelete = () => {
    if (onDeleteCard && card) {
      onDeleteCard(card);
      onClose();
    }
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/498x498?text=Image+Not+Available";
  };

  if (!card) return null;

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={card.link}
          alt={card.name}
          className="modal__image"
          onError={handleImageError}
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          {onDeleteCard && (
            <button
              className="modal__delete-btn"
              type="button"
              onClick={handleDelete}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
