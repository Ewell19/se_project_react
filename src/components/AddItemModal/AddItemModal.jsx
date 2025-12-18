import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import "./AddItemModal.css";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "hot",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weather,
    });
    resetForm({
      name: "",
      imageUrl: "",
      weather: "hot",
    });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      name="add-garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="modal__input"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          required
          className="modal__input"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          Hot
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
            required
          />
          Warm
        </label>
        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
            required
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
