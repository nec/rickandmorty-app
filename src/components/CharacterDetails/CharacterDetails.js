import React from "react";
import PropTypes from "prop-types";
import "./CharacterDetails.css";

import Status from "../Status/Status";

const CharacterDetails = props => {
  const { el } = props;

  return (
    <div className="character-card">
      <img src={el.image} alt={el.name} />
      <div className="character-descr">
        <h1 className="character-name">
          {el.name} <Status status={el.status} />
        </h1>
        <p>
          status: <span>{el.status}</span>
        </p>
        <p>
          species: <span>{el.species}</span>
        </p>
        <p>
          gender: <span>{el.gender}</span>
        </p>
        <p>
          location: <span>{el.location.name}</span>
        </p>
        <p>
          origin: <span>{el.origin.name}</span>
        </p>
        {el.type ? (
          <p>
            type: <span>{el.type}</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

CharacterDetails.propTypes = {
  el: PropTypes.object.isRequired
};

export default CharacterDetails;
