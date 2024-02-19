//React Import
import { useState } from "react";

//Components Imports
import Header from "./Header";
import Filters from "./filters/Filters";
import QuotesList from "./quotes/QuotesList";

//Data Import
import quotesOriginal from "../data/quotes.json";

//Scss Import
import "../scss/App.scss";

function App() {
  const [quotesList] = useState(quotesOriginal);

  //const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("all");

  const handleFilter = (value) => {
    console.log(value);

    setFilterCharacter(value);
  };

  const filteredQuotes = quotesList.filter((quote) => {
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
        <QuotesList quotesList={filteredQuotes} />
      </main>
    </div>
  );
}

export default App;
