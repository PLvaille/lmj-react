import { useState, useEffect } from "react";
import "../styles/Layout.css";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Footer from "./Footer";
import OrderForm from "./OrderForm";
import ShoppingList from "./ShoppingList";
import Modale from "./Modale";
import { plantList } from "../datas/plantList";

function App() {
  const savedCart = localStorage.getItem("cart");
  //chargement du panier stocké dans le localstorage si existant, au chargement de la page, sinon []
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [formIsOpen, setFormOpen] = useState(false);
  const [modal, modalState] = useState(false);
  const [currentPlant, plantModal] = useState([]);
  const [total, setTotal] = useState("");
  const [cartIsOpen, setCartIsOpen] = useState(true);
  const [clientY, setClientY] = useState('')

  //sauvegarde dans le localstorage du cart à chaque màj du cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //alerte au chargement de la page []
  useEffect(() => {
    alert("Bienvenue dans La maison jungle");
  }, []);

  return (
    <div className="main-page">
      {modal ? (
        <div className="modal-wraper">
          <Modale
           clientY={clientY}
            cart={cart}
            updateCart={updateCart}
            modalState={modalState}
            currentPlant={currentPlant}
          />
        </div>
      ) : null}

      <Banner>
        {formIsOpen ? null : cartIsOpen ? null : (
          <div className="cart-total">Montant du panier : {total} €</div>
        )}
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div
        className="lmj-layout-inner"
        style={modal ? { filter: "blur(4px" } : null}
      >
        {formIsOpen ? null : (
          <Cart
            setCartIsOpen={setCartIsOpen}
            cartIsOpen={cartIsOpen}
            cart={cart}
            updateCart={updateCart}
            setTotal={setTotal}
            setFormOpen={setFormOpen}
          />
        )}
        {formIsOpen ? (
          <OrderForm
            cart={cart}
            updateCart={updateCart}
            setFormOpen={setFormOpen}
          />
        ) : (
          <ShoppingList
          setClientY={setClientY}
            modal={modal}
            currentPlant={currentPlant}
            plantModal={plantModal}
            plantList={plantList}
            modalState={modalState}
            formIsOpen={formIsOpen}
            setFormOpen={setFormOpen}
            cart={cart}
            updateCart={updateCart}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
