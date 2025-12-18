import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onAddClick, onCardClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onAddClick={onAddClick}
        onCardClick={onCardClick}
      />
    </div>
  );
}

export default Profile;
