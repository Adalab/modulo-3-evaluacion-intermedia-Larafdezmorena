import PropTypes from "prop-types";

function FilterCharacter({ handleFilter }) {
  const handleInputCharacter = (event) => {
    handleFilter("character", event.currentTarget.value);
  };
  return (
    <label className="filter__label" htmlFor="character">
      Filtrar por personaje
      <select className="filter__select" onInput={handleInputCharacter}>
        <option value="all">Todos</option>
        <option value="Rachel">Rachel</option>
        <option value="Ross">Ross</option>
        <option value="Monica">Monica</option>
        <option value="Chandler">Chandler</option>
        <option value="Phoebe">Phoebe</option>
        <option value="Joey">Joey</option>
      </select>
    </label>
  );
}

FilterCharacter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterCharacter;
