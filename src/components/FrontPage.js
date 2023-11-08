import completeLogo from "../img/completeLogo.png";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

export const Frontpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="logoFrontPage" src={completeLogo} />
      <h1>Frontify</h1>
      <button className="startButton" onClick={() => navigate("albums")}>
        Empezar
      </button>
    </div>
  );
};

export default Frontpage;
