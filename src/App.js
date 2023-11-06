import './App.css';
import StartButton from './components/StartButton';
import Logo from './components/Logo';
import GetAlbumCatalog from './components/GetAlbumCatalog';
// import TemporalMain from './components/TemporalMain';

function App() {
  
  return (
    <div className="App">
      <Logo />
      <StartButton />
      <GetAlbumCatalog />
      {/* <TemporalMain /> */}
    </div>
  );
}

export default App;

