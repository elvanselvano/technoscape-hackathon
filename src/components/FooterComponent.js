import React, { Component } from "react";

export default class FooterComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div className="component footer" />;
  }
}

// <footer
//   style={{
//     position: "absolute",
//     bottom: "2%",
//     width: "96%",
//   }}
// >
//   <hr />
//   <p className="text-muted">
//     Created with love by Muhammad Kharisma Azhari
//   </p>
// </footer>
