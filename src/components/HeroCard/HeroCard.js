import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./hero.css";

function HeroCard() {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [results, setResults] = useState([]);
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setEpisode(data.episode);
      });

    //eslint-disable-next-line
  }, []);

  const renderEpisode = episode.map((el, index) => {
    return <div key={el + index}>{el}</div>;
  });

  return (
    <div className="card">
      <div>
        <img src={results.image} alt={results.name} />
      </div>
      <div className="card-content">
        <span>{results.name}</span>
        <span>Gender: {results.gender}</span>
        <div className="status">
          <div
            className={`circle ${
              results.status === "Alive" ? "circleGreen" : "circleRed"
            } ${results.status === "unknown" ? "circleGray" : ""}`}
          ></div>
          {results.status} - {results.species}
        </div>
        <div>
          Episode list:
          {renderEpisode}
        </div>
        <button className="main-btn back" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
