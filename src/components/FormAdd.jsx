function FormAdd() {
  return (
    <form className="new-quote__form">
      <h2 className="new-quote__title">Añade una nueva frase</h2>
      <label className="new-quote__label" htmlFor="quote">
        <span className="new-quote__label-text">Frase</span>
        <input
          className="new-quote__text"
          type="text"
          name="quote"
          id="quote"
        />
      </label>
      <label className="new-quote__label" htmlFor="character">
        <span className="new-quote__label-text">Personaje</span>
        <input
          className="new-quote__text"
          type="text"
          name="character"
          id="character"
        />
      </label>
      <button className="new-quote__btn">Añadir un nueva frase</button>
    </form>
  );
}

export default FormAdd;
