import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { asyncAction } from "../actions";
import { withRouter } from "react-router-dom";
import CharacterList from "../components/CharacterList/CharacterList";
import Loading from "../components/Loading/Loading";
import Filter from "../components/Filter/Filter";

export class CharacterListContainers extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id = 1 }
      },
      actionAsync
    } = this.props;

    actionAsync(id);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id }
      },
      location: { search },
      actionAsync
    } = this.props;

    if (id !== prevProps.match.params.id) {
      actionAsync(id);
    }
    //if changes location.search in filter (ex. ?gender=male)
    if (search !== prevProps.location.search) {
      actionAsync(id);
    }
  }

  render() {
    const {
      reducerCharacters,
      isFetching,
      match: {
        params: { id }
      },
      error
    } = this.props;

    if (error) {
      return (
        <h1 style={{ color: "red" }}>
          {error.status} {error.statusText}
        </h1>
      );
    }

    return (
      <React.Fragment>
        <Filter />
        {isFetching ? (
          <Loading who="catalog" />
        ) : (
          <CharacterList
            characters={reducerCharacters}
            isFetching={isFetching}
            id={id}
            pagesCount={reducerCharacters.info.pages}
          />
        )}
      </React.Fragment>
    );
  }
}

CharacterListContainers.propTypes = {
  actionAsync: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  reducerCharacters: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default withRouter(
  connect(
    state => ({
      reducerCharacters: state.reducerCharacters.payload,
      error: state.reducerCharacters.error,
      isFetching: state.reducerCharacters.isFetching
    }),
    (dispatch, ownProps) => ({
      actionAsync: p => dispatch(asyncAction(p, ownProps.location.search))
    })
  )(CharacterListContainers)
);
