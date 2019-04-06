import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Filter.css";

function ExtendNavLink(Wrapped) {
  return class extends Component {
    render() {
      const { search } = this.props;
      return (
        <Wrapped
          to={{ pathname: "/", search: search }}
          isActive={(match, location) => location.search === search}
          {...this.props}
        />
      );
    }
  };
}

const ExtNavLink = ExtendNavLink(NavLink);

const Filter = () => {
  return (
    <div className="filter">
      <span className="filter__tit">filter by</span>

      <ExtNavLink search="?gender=male">Male</ExtNavLink>
      <ExtNavLink search="?gender=female">Female</ExtNavLink>
      <ExtNavLink search="?gender=genderless">genderless</ExtNavLink>
      <ExtNavLink search="?gender=unknown">unknown</ExtNavLink>

      {" | "}

      <ExtNavLink search="?status=alive">alive</ExtNavLink>
      <ExtNavLink search="?status=dead">dead</ExtNavLink>
      <ExtNavLink search="?status=unknown">unknown</ExtNavLink>
    </div>
  );
};

export default Filter;
