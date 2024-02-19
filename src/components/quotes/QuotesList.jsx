import PropTypes from "prop-types";

import QuoteItem from "./QuoteItem";

function QuotesList({ quotesList }) {
  const quotesHtml = quotesList.map((quote, idx) => (
    <li key={idx} className="quotes__item">
      <QuoteItem quote={quote.quote} author={quote.character} />
    </li>
  ));

  return <ul className="quotes__list">{quotesHtml};</ul>;
}

QuotesList.propTypes = {
  quotesList: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      character: PropTypes.string,
    })
  ),
};

export default QuotesList;
