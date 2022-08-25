import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
	else {
		return true
	}
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
	  <form>
      <input
        type="email"
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
	  <button type='submit' onClick={(e) => e.preventDefault(handleBlur() ? alert('Vous êtes désormais inscrit à la news letter !') : null)} className="btn btn-order btn-footer">Recevoir la newsletter</button>
	  </form>
    </footer>
  );
}

export default Footer;
