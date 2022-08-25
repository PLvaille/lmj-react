import "../styles/OrderForm.css";
function OrderForm({ cart, updateCart, setFormOpen }) {
  function deleteItem(index) {
    cart.splice(index, 1);
    updateCart([...cart]);
  }
  let total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  function alertSubmit(e) {
    e.preventDefault();
    alert(">>>> Commande effectuée ! <<<<");
  }

  function handleName(e) {console.log(e.target.value)}
  function handleSurname(e) {console.log(e.target.value)}
  function handleEmail(e) {console.log(e.target.value)}
  function handleCity(e) {console.log(e.target.value)}
  function handleCp(e) {console.log(e.target.value)}
  function handleStreet(e) {console.log(e.target.value)}
  function handleNumber(e) {console.log(e.target.value)}

  return (
    <div className="form-container">
      <button className="btn btn-back-form" onClick={() => setFormOpen(false)}>
        Revenir au magasin
      </button>
      <h2>FORMULAIRE DE COMMANDE</h2>
      <div className="cart">
        <h3>Résumé de votre panier</h3>
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
        <h4>
          Total : <span>{total} €</span>
        </h4>
      </div>{" "}
      {/* fin cart */}
      <form action="" method="" onSubmit={(e) => alertSubmit(e)}>
        <label for="nom">Votre nom : </label>
        <input
          className="form-input"
          type="text"
          name="nom"
          id="nom"
          minLength={2}
          required
          onChange={(e) => handleName(e)}
        />
        <label for="prenom">Votre prénom : </label>
        <input
          className="form-input"
          type="text"
          name="prenom"
          id="prenom"
          minLength={2}
          required
          onChange={(e) => handleSurname(e)}
        />
        <label for="email">Votre adresse e-mail : </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => handleEmail(e)}
        />
        <label for="adresse-ville">Ville : </label>
        <input
          className="form-input"
          type="text"
          name="adresse-ville"
          minLength={2}
          id="adresse-ville"
          required
          onChange={(e) => handleCity(e)}
        />
        <label for="adresse-cp">Code Postal : </label>
        <input
          className="form-input"
          type="text"
          name="adresse-cp"
          id="adresse-cp"
          required
          onChange={(e) => handleCp(e)}
        />
        <label for="adresse-rue">Rue : </label>
        <input
          className="form-input"
          type="text"
          name="adresse-rue"
          id="adresse-rue"
          required
          onChange={(e) => handleStreet(e)}
        />
        <label for="adresse-num">Numéro : </label>
        <input
          className="form-input"
          type="text"
          name="adresse-num"
          id="adresse-num"
          required
          onChange={(e) => handleNumber(e)}
        />

        <input className="submit-btn btn" value="Commander" type="submit" />
      </form>
    </div>
  );
}
export default OrderForm;
