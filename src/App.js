import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

import Data from './Data.json'

function App() {
  return (
    <div className="App">
      <SearchBar placeholder={'Enter text'} data={Data}/>
    </div>
  );
}

export default App;
