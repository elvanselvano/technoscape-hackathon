import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRegister = () => {
    this.props.history.push("/auth/register");
  };

  handleLogin = () => {
    this.props.history.push("/auth/login");
  };

  render() {
    return (
      <div className="container">
        <div className="m-5">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.handleRegister()}
          >
            Register
          </button>
        </div>
        <div className="m-5">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.handleLogin()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
