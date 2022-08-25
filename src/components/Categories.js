import "../styles/Categories.css";

function Categories({
  setActiveCategory,
  categories,
  activeCategory,
  sizes,
  setActiveSize,
  activeSize,
  setResults,
}) {
  function resetFilters() {
    setResults(true);
    setActiveCategory("");
    setActiveSize("");
  }

  function handleCat(e) {
    setResults(true);
    setActiveCategory(e.target.value);
  }

  function handleSize(e) {
    setResults(true);
    setActiveSize(e.target.value);
  }

  return (
    <div className="lmj-categories">
      <h3>Filtres</h3>
      <div className="filters">
      <label className="filter-label" for="category">Catégorie : </label>
      <select
        id="category"
        value={activeCategory}
        onChange={(e) => handleCat(e)}
        className="lmj-categories-select"
      >
        <option value={""}>---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label className="filter-label" for="taille">Taille : </label>
      <select
        id="taille"
        value={activeSize}
        onChange={(e) => handleSize(e)}
        className="lmj-categories-select"
      >
        <option value={""}>---</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      </div>
      <button className="btn btn-reset-filters" onClick={() => resetFilters()}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
