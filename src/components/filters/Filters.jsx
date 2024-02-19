import PropTypes from "prop-types";
import FilterCharacter from "./FilterCharacter";
import FilterQuote from "./FilterQuote";

function Filters({ handleFilter }) {
  return (
    <form className="filter">
      <FilterCharacter handleFilter={handleFilter} />
      <FilterQuote />
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
