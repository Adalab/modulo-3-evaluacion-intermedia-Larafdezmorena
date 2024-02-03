//import { useState } from 'react';

import Header from './Header';
import Form from './Filters';
import List from './QuotesList';

import '../scss/App.scss'

import DataQuotes from "../data/quotes.json";
import { useState } from 'react';

function App() {
const [quotes, setQuotes] = useState(DataQuotes);


  return (
    <div className='app'>
      <Header />
      <main>
       <Form />
        <List quotes={quotes}/>
      </main>
    </div>
  )
}

export default App
