import React, { Component } from "react";
import { flexbox } from "@material-ui/system";

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
      <div className="auth page">
        <box display="flex" flexDirection="column">
          <box m={5}>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => this.handleRegister()}
            >
              Register
            </button>
          </box>
          <box m={5}>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => this.handleLogin()}
            >
              Login
            </button>
          </box>
        </box>
      </div>
    );
  }
}
