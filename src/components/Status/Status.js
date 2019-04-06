import React from "react";
import PropTypes from "prop-types";

const Status = ({ status }) => {
  const mapStatus = {
    Alive: "lime",
    Dead: "red",
    unknown: "#05f"
  };

  return (
    <sup style={{ color: mapStatus[status] }} title={status}>
      ●
    </sup>
  );
};

Status.propTypes = {
  status: PropTypes.string
};

export default Status;
