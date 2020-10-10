import React, { Component } from "react";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>404 Not found.</h1>
      </div>
    );
  }
}

export default ErrorPage;
