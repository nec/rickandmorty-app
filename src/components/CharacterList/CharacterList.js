import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Pagination from "../Pagination/Pagination";
import CharacterCard from "../CharacterCard/CharacterCard";

import "./CharacterList.css";

class CharacterList extends PureComponent {
  render() {
    const { characters, id, pagesCount } = this.props;

    return (
      <React.Fragment>
        <Pagination pagenum={id} pagesCount={pagesCount} />
        <div className="wrapper_cat">
          <div className="pers-grid">
            {characters.results.map(el => {
              return <CharacterCard el={el} key={el.id} />;
            })}
          </div>
        </div>
        <Pagination pagenum={id} pagesCount={pagesCount} />
      </React.Fragment>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.object.isRequired,
  id: PropTypes.string,
  pagesCount: PropTypes.number.isRequired
};

export default CharacterList;
