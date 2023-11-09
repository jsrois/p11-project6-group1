import completeLogo from "../assets/img/Isologo.svg";
import "./Header.css";
import { SearchBar } from "./SearchBar";

function Header() {
  return (
    
    <div>
      <SearchBar />
      <img className="logoAlbumPage" src={completeLogo} />
    </div>
  );
}

export default Header;
