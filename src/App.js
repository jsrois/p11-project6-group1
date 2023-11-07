import './App.css';
import FrontPage from './components/FrontPage';
import GetAlbumCatalog from './components/GetAlbumCatalog';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path='albums' element={<GetAlbumCatalog />} />
      </Routes>
    </div>
  );
}

export default App;

