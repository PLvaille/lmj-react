import "../styles/Modale.css";
import CareScale from "./CareScale";

function Modale({
  cart,
  updateCart,
  modalState,
  currentPlant,
  clientY,
}) {

    let modalPlant = JSON.parse(currentPlant)

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

  return (
    <div className="modal-container" style={{top:clientY}}>
      <div className="modal-main">
        <h2 className="modal-title">{modalPlant.name}</h2> 
        <span className="modal-category">{modalPlant.size} plante {modalPlant.category}</span>
        <img className="modal-img" src={modalPlant.cover} alt={`présentation visuelle : ${modalPlant.name}`} title={modalPlant.name}/>
        <div className='modal-plant-price'>{modalPlant.price} €</div>
        <div className="care-container">
         <div className='care-modal'> Besoins en eau : <CareScale
            className="plant-water"
            careType="water"
            scaleValue={modalPlant.water}
          />
          </div>
          <div className='care-modal'> Besoins en lumière : 
          <CareScale
            className="plant-light"
            careType="light"
            scaleValue={modalPlant.light}
          />
          </div>
        </div>
        <div className='modal-plant-info'>{modalPlant.info}</div>
       
        <button className="btn add-cart" onClick={() => addToCart(modalPlant.name, modalPlant.price)}>
          Ajouter
        </button>
        <button className="btn close-modal" onClick={() => modalState(false)}>
          X
        </button>
      </div>
    </div>
  )
}

export default Modale;
