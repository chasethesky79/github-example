import React from 'react';
import logo from '../logo.svg'
import Header from '../components/header/header'
import Profile from '../containers/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile/>
    </div>
  );
}

export default App;
