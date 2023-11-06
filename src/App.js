import './App.css';
import StartButton from './components/StartButton';
import Logo from './components/Logo';
import Fetch from './components/Fetch';
// import TemporalMain from './components/TemporalMain';

function App() {
  
  return (
    <div className="App">
      <Logo />
      <StartButton />
      <Fetch />
      {/* <TemporalMain /> */}
    </div>
  );
}

export default App;

