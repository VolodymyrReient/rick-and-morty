import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-content">
        <span>{props.name}</span>
        <span>Gender: {props.gender}</span>
        <div className="status">
          <div
            className={`circle ${
              props.status === "Alive" ? "circleGreen" : "circleRed"
            } ${props.status === "unknown" ? "circleGray" : ""}`}
          ></div>
          {props.status} - {props.species}
        </div>
        <Link className="main-btn" to={`/hero/${props.id}`}>
          <span>More</span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
