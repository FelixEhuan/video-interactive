import React from 'react';
import logo from './logo.svg';
import './App.css';
import seyba from './seyba.png';
function App() {
  const clickedBoat = () => {
    console.log('clickedBoat');
  }
  return (
    <div className="App">
      <img src={seyba} className="App-logo" alt="logo" />
      <button onClick={clickedBoat} className="invisible-click" id="boat"></button>
    </div> 
  );
}

export default App;
