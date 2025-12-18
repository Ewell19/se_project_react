import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { getWeather } from "../../utils/weatherApi";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { defaultClothingItems } from "../../utils/clothingItems";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItem = (item) => {
    addItem({
      name: item.name,
      link: item.imageUrl,
      weather: item.weather,
    })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
  };

  const handleDeleteCard = (card) => {
    setCardToDelete(card);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (cardToDelete) {
      deleteItem(cardToDelete._id)
        .then(() => {
          setClothingItems(
            clothingItems.filter((item) => item._id !== cardToDelete._id)
          );
          handleCloseModal();
          setShowDeleteConfirm(false);
          setCardToDelete(null);
        })
        .catch((err) => {
          console.error("Error deleting item:", err);
          setShowDeleteConfirm(false);
          setCardToDelete(null);
        });
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setCardToDelete(null);
  };

  useEffect(() => {
    // Fetch weather data
    getWeather()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        // Set default weather data if API fails
        setWeatherData({
          temperature: {
            F: 75,
            C: 24,
          },
          weather: "warm",
          city: "Location",
        });
      });

    // Fetch clothing items from API
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        // Use default items if API fails
        setClothingItems(defaultClothingItems);
      });
  }, []);

  return (
    <Router basename="/se_project_react">
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <div className="page__content">
                  <Main
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                  />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/profile"
              element={
                <div className="page__content">
                  <Profile
                    clothingItems={clothingItems}
                    onAddClick={handleAddClick}
                    onCardClick={handleCardClick}
                  />
                  <Footer />
                </div>
              }
            />
          </Routes>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItem}
            onCloseModal={handleCloseModal}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            onClose={handleCloseModal}
            card={selectedCard}
            onDeleteCard={handleDeleteCard}
          />
          {showDeleteConfirm && (
            <DeleteConfirmModal
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </Router>
  );
}

export default App;
