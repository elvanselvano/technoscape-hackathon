import React, { Component } from "react";

class ProfileUpdateItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { initialValues } = this.props;
    const { id, username, email, password } = initialValues;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>{username}</td>
            <td>{email}</td>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ProfileUpdateItemComponent;
