import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, onAddClick, onCardClick }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your Items</h2>
        <button className="clothes-section__add-btn" onClick={onAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
