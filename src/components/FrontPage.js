import Isologo from "../assets/img/Isologo.png";
import Imagotipo from "../assets/img/Imagotipo.png"
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

export const Frontpage = () => {
  const navigate = useNavigate();
  return (
    <div className="frontPage">
      <img className="logoFrontPagePc" src={Isologo} />
      <img className="logoFrontPagePhone" src={Imagotipo} />
      <h1>Frontify</h1>
      <button className="startButton" onClick={() => navigate("albums")}>
        Empezar
      </button>
    </div>
  );
};

export default Frontpage;
