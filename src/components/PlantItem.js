import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ cart, updateCart, modalState, cover, name, water, light, price,category, info, size, currentPlant, plantModal, setClientY }) {


  function addToCart(name, price) {
    alert('Article ajouté !')
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }
  function openModal(e) {
    currentPlant =  {name, cover, water, light, price, category, info, size }
    e.stopPropagation();
    e.preventDefault();
    setClientY(e.pageY -600)
    console.log(e.pageY)
    modalState(true);
    plantModal(JSON.stringify(currentPlant));
  }
  return (
    <div>
      <li className="lmj-plant-item">
        <span className="lmj-plant-item-price">{price}€</span>
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        <p className="lmj-plant-name">{name}</p>
        <div className="care-container">
          <CareScale
            className="plant-water"
            careType="water"
            scaleValue={water}
          />
          <CareScale
            className="plant-light"
            careType="light"
            scaleValue={light}
          />
        </div>
      </li>
      <div className="btn-container">
        <button className="btn info-cart-btn"
          onClick={(e) => {
            openModal(e);
          }}
        >  Détails
        </button>
        <button className="btn add-cart-btn" onClick={() => addToCart(name, price)}>Ajouter</button>
      </div>
      <div className="add-to-cart-alert-msg"></div>
    </div>
  );
}

export default PlantItem;
