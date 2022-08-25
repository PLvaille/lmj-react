import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import { useState } from "react";

function ShoppingList({
  cart,
  updateCart,
  activeCategory,
  setActiveCategory,
  modalState,
  plantList,
  currentPlant,
  plantModal,
  setActiveSize,
  activeSize,
  setClientY
}) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  const sizes = plantList.reduce(
    (acc, plant) => (acc.includes(plant.size) ? acc : acc.concat(plant.size)),
    []
  );

  const [result, setResults] = useState(true);

  let accu = 1;

  function emptyItem() {
    accu++;
    if (accu > plantList.length) {
      setResults(false);
  }
    return null;
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        setResults={setResults}
        sizes={sizes}
        setActiveSize={setActiveSize}
        activeSize={activeSize}
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      {result ? (
        <ul className="lmj-plant-list">
          {plantList.map(
            ({ id, cover, name, water, light, price, category, info, size }) =>
              (!activeCategory || activeCategory === category) &&
              (!activeSize || activeSize === size) ? (
                <div className="lmj-plant" key={id}>
                  <PlantItem
                  setClientY={setClientY}
                    currentPlant={currentPlant}
                    plantModal={plantModal}
                    modalState={modalState}
                    cart={cart}
                    updateCart={updateCart}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                    price={price}
                    category={category}
                    info={info}
                    size={size}
                  />
                </div>
              ) : (
                emptyItem()
              )
          )}
        </ul>
      ) : (
        <div className="list-empty">
          😥 Aucune plante disponible actuellement ne correspond à vos critères
          de recherche !
        </div>
      )}
    </div>
  );
}

export default ShoppingList
