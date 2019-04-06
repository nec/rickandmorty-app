import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./Pagination.css";

export class Pagination extends PureComponent {
  static defaultProps = {
    pagenum: "1"
  };

  render() {
    const { pagenum, pagesCount, location } = this.props;

    const pagenumber = Number(pagenum);

    const np = pagenumber + 1;
    const pp = pagenumber - 1;

    return (
      <div className="pagination">
        {pagenumber !== 1 ? (
          <Link to={{ pathname: `/page/${pp}`, search: location.search }} className="nextbtn">
            ←
          </Link>
        ) : (
          <span className="btn-off">←</span>
        )}
        <span className="current-page">
          {pagenumber}/{pagesCount}
        </span>
        {np > pagesCount ? (
          <span className="btn-off">→</span>
        ) : (
          <Link to={{ pathname: `/page/${np}`, search: location.search }} className="nextbtn">
            →
          </Link>
        )}
      </div>
    );
  }
}

Pagination.propTypes = {
  pagenum: PropTypes.string,
  location: PropTypes.object.isRequired,
  pagesCount: PropTypes.number.isRequired
};

export default withRouter(Pagination);
