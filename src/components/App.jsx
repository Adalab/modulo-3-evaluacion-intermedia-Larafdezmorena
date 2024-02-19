import { useState } from "react";

import Header from "./Header";
import Filters from "./filters/Filters";
import QuotesList from "./quotes/QuotesList";

import quotesOriginal from "../data/quotes.json";

import "../scss/App.scss";

function App() {
  const [quotesList] = useState(quotesOriginal);
  
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState("all");

  const handleFilter = (filterName, value) => {
    
    if( filterName ==='quote'); {
    setFilterQuote(value);
    }
    else if (filterName === 'character') {
      setFilterCharacter(value);
    }
  };

  const filteredQuotes = 
  quotesList
  .filter ( quote => quote.quote.includes(filterQuote))
  .filter( quote  => {
    if (filterCharacter === "all") {
      return true;
    } else {
      return quote.character === filterCharacter;
    }
  });

  //const filteredQuotes = quotesList.filter ( quote => {=== 'all' || quote.character===filterCharacter});

  return (
    <div className="app">
      <Header />
      <main>
        <Filters handleFilter={handleFilter} />
        <QuoteList quotesList={filteredQuotes} />
      </main>
    </div>
  );
}

export default App;
