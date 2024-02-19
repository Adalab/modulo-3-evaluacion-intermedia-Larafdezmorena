import PropTypes from "prop-types";
import FilterCharacter from "./FilterCharacter";

function Filters({ handleFilter }) {
  return (
    <form className="filter">
      <FilterCharacter handleFilter={handleFilter} />
      <label className="filter__label" htmlFor="character">
        Filtrar por frase
        <input className="filter__input" type="text" name="quote" id="quote" />
      </label>
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
