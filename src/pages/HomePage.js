import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeywords: "",
    };
  }

  render() {
    return (
      <div className="home page container">
        <h1>Home Page</h1>
      </div>
    );
  }
}
