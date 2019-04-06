import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CharacterCard.css";

import Status from "../Status/Status";

class CharacterCard extends PureComponent {
  render() {
    const { el } = this.props;

    return (
      <Link to={`/char/${el.id}`}>
        <div className="pers-card">
          <div className="pers-card__pic">
            <div className="pers-card__picinn">
              <img src={el.image} alt={el.name} />
            </div>
          </div>

          <div className="pers-descr">
            {el.name} <Status status={el.status} />
          </div>
        </div>
      </Link>
    );
  }
}

CharacterCard.propTypes = {
  el: PropTypes.object.isRequired
};

export default CharacterCard;
