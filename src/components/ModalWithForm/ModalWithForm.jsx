import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  name,
  isOpen,
  onClose,
  onSubmit,
}) {
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

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${name}`}
    >
      <div className="modal__content">
        <h2 id={`modal-title-${name}`} className="modal__title">
          {title}
        </h2>
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        ></button>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <button
            className="modal__submit"
            type="submit"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
