import { useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart, setFormOpen, setTotal, cartIsOpen, setCartIsOpen }) {

  let total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  
  //changement du titre du l'onglet quand màj du prix
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
	setTotal(total);
	// eslint-disable-next-line
  }, [total]);

  function deleteItem(index) {
    cart.splice(index, 1);
    updateCart([...cart]);
  }

  return cartIsOpen ? (
    <div className="lmj-cart">
      <button className="btn toggle-btn" onClick={() => setCartIsOpen(false)}>
        ⬅️ Fermer le panier
      </button>

      {cart.length > 0 ? (
        <div>
          <div>
            <h2>Panier</h2>
            <ul>
              {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                  <button
                    className="cart-delete-btn"
                    onClick={() => deleteItem(index)}
                  >
                    X
                  </button>
                  <span className="cart-item-name">{name} </span>
                  {amount} x {price}€ : {amount * price}€
                </div>
              ))}
            </ul>
            <h3>
              Total : <span>{total} €</span>
            </h3>
            <button
              className="btn lmj-empty-cart-btn"
              onClick={() => updateCart([])}
            >
              🗑️ Vider le panier
            </button>
          </div>

          <div className="btn-order-container">
            <button className="btn btn-order" onClick={() => setFormOpen(true)}>
              Passer commande
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-is-empty">Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="btn cart-toogle-btn" onClick={() => setCartIsOpen(true)}>
        Ouvrir le Panier ➡️
      </button>
    </div>
  );
}

export default Cart;
