import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/328x328?text=Image+Not+Available";
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        src={item.link}
        alt={item.name}
        className="card__image"
        onClick={handleCardClick}
        onError={handleImageError}
      />
    </li>
  );
}

export default ItemCard;
