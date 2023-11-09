import "./App.css";
import FrontPage from "./components/FrontPage";
import AlbumCatalog from "./components/AlbumCatalog";
import SearchPage from "./components/SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="albums" element={<AlbumCatalog />} />
        <Route path="SearchPage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
