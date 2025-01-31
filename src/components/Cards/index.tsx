import "./styles.css";
import carImg from "../../assets/car-card.png";

export default function Cards() {
  return (
    <>
      <div className="ds-card">
        <img src={carImg} alt="Car" />
        <p>Lorem ipsum dolor</p>
      </div>
    </>
  );
}
