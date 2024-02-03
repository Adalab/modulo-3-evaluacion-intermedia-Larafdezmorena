import PropTypes from "prop-types";
function Item ({quote , character}) {
    
    return (
        <>
        <p>{quote}</p>
        <h3 className="name">{character}</h3>
        </>
    )
}

Item.propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};

export default Item;