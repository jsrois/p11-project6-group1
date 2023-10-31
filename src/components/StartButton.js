import DefaultButton from "./DefaultButton";
import '../components/StartButton.css';

function StartButton() {
  return (
    <div className="start-button">
      <DefaultButton buttonText={"EMPEZAR"} />
    </div>
  );
}

export default StartButton;