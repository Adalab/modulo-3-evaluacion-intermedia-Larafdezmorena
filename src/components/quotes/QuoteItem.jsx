import PropTypes from "prop-types";

function QuoteItem({ quote, author }) {
  return (
    <h2 className="quotes__quote">
      <spam>{quote}</spam>
      <spam className="quotes__character">{author}</spam>
    </h2>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default QuoteItem;
