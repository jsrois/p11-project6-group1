import { useEffect, useState } from 'react';
import './App.css';
import StartButton from './components/StartButton';
import AlbumCatalog from './components/AlbumCatalog';
import Logo_Complete from './img/Logo_Complete.png';

function App() {
  return (
    <div className="App">
      <StartButton />
      <AlbumCatalog />
    </div>
  );
}

export default App;

