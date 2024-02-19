import PropTypes from "prop-types";

function QuoteItem({ quote, author }) {
  return (
    <h2 className="quotes__quote">
      <div>{quote}</div>
      <div className="quotes__character">{author}</div>
    </h2>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default QuoteItem;
