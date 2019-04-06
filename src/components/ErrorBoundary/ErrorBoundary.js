import React, { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({
      error: error
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="Error-boundary">
          <h2>Oops!... Something went wrong.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
