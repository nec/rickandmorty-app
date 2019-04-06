import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { asyncActionPers } from "../actions";

import CharacterDetails from "../components/CharacterDetails/CharacterDetails";
import Loading from "../components/Loading/Loading";

export class CharacterDetailsContainer extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      asyncActionPers
    } = this.props;
    asyncActionPers(id);
  }

  render() {
    const { pers, isFetching, error } = this.props;

    if (error) {
      return (
        <h1 style={{ color: "red" }}>
          {error.status} {error.statusText}
        </h1>
      );
    }

    if (isFetching) {
      return <Loading who="character" />;
    }

    return <CharacterDetails el={pers} />;
  }
}

CharacterDetailsContainer.propTypes = {
  asyncActionPers: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  pers: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default connect(
  state => ({
    pers: state.reducerPers.payload,
    isFetching: state.reducerPers.isFetching,
    error: state.reducerPers.error
  }),
  dispatch => ({
    asyncActionPers: id => dispatch(asyncActionPers(id))
  })
)(CharacterDetailsContainer);
