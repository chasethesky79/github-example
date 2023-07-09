import React from 'react';
import logo from '../logo.svg'
import Header from '../components/header/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
    </div>
  );
}

export default App;
