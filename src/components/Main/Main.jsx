import { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

function Main({ weatherData, clothingItems, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherType = weatherData?.weather || "cold";
  const displayTemperature = weatherData?.temperature
    ? weatherData.temperature[currentTemperatureUnit]
    : "--";

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {displayTemperature}°{currentTemperatureUnit} / You may want
          to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter(
              (item) => item.weather.toLowerCase() === weatherType.toLowerCase()
            )
            .map((item) => (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
