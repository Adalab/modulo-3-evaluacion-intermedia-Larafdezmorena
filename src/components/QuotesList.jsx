import PropTypes from 'prop-types';
import Item from "./QuoteItem";

function List ({ quotes }) {

    const htmlQuotes = quotes.map ((quote,idx) => (
        <li key={idx} className="quotes__item">
        <Item 
        quote={quote.quote}
        character={quote.character}
        />
    </li>
    ))

    return (

<ul className='quotes__list'>
    {htmlQuotes};
</ul>
    )
}

List.proptypes = {
    quotes: PropTypes.array
}

export default List;