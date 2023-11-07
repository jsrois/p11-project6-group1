import Imagotipo2 from "../img/Imagotipo2.png";
import { useNavigate } from "react-router-dom"; 
import './FrontPage.css'

export const Frontpage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <img class="Imagotipo2" src={Imagotipo2} />
      <h1>Frontify</h1>
      <button onClick={ () => navigate('albums')}>Empezr</button>
    </div>
  );
};

export default Frontpage;
