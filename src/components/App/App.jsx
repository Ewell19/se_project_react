import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddGarment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      _id: Date.now().toString(),
      name: formData.get("name"),
      link: formData.get("imageUrl"),
      weather: formData.get("weather"),
    };
    setClothingItems([...clothingItems, newItem]);
    handleCloseModal();
  };

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        // Set default weather data if API fails
        setWeatherData({
          temperature: 75,
          weather: "warm",
          city: "Location",
        });
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header onAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        name="add-garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
        onSubmit={handleAddGarment}
      >
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="modal__input"
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
          />
        </label>
        <fieldset className="modal__fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__radio-label">
            <input
              type="radio"
              name="weather"
              value="hot"
              defaultChecked
              required
            />
            Hot
          </label>
          <label className="modal__radio-label">
            <input type="radio" name="weather" value="warm" required />
            Warm
          </label>
          <label className="modal__radio-label">
            <input type="radio" name="weather" value="cold" required />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
