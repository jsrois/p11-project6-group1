import { useEffect, useState } from 'react';
import './App.css';
import StartButton from './components/StartButton';
import Logo_Complete from './img/Logo_Complete.png';
import Fetch from './components/Fetch';

function App() {
  
  return (
    <div className="App">
      <StartButton />
      <Fetch />
    </div>
  );
}

export default App;

