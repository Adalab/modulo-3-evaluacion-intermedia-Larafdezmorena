function Filters () {

    return (
        <form>
        <label >Filtrar por frase</label>
        <input className="filter" type="text" placeholder='' />
        <label >Filtrar por personaje</label>
        <select className="filter" name="characters" id="characters">
          <option value="Rachel">Rachel</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Mónica</option>
          <option value="Chandler">chandler</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Joey">Joey</option>
        </select>
      </form>
    )
}

export default Filters;