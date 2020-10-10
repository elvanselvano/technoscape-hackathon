import React, { Component } from "react";
import AuthSession from "../utils/AuthSession";

import ProfileUpdateFormComponent from "../components/ProfileUpdateFormComponent";
import ProfileUpdateItemComponent from "../components/ProfileUpdateItemComponent";

import UserService from "../services/UserService";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      itemValues: {
        id: "",
        username: "",
        email: "",
        password: "",
      },
      isLoading: false,
    };
  }

  componentDidMount() {
    // this.handleItemFetch();
  }

  handleItemFetch = () => {
    const { username: currentUsername } = AuthSession.handleGetUser();
    UserService.getByUsername({ username: currentUsername })
      .then((res) => {
        console.log(res);

        this.setState({ itemValues: res.data });

        const { id, username, email, password } = res.data;
        AuthSession.handleLoginSucceed({ id, username, email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (val) => {
    const { username, email, password } = val;
    const userToUpdate = { username, email, password };

    this.setState({ isLoading: true });
    UserService.update({ userToUpdate })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) return null;

        this.handleItemFetch();
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleValidate = (val) => {
    const error = {};
    if (!val.username) {
      error.username = "Enter a username";
    }

    if (!val.email) {
      error.email = "Enter a email";
    }

    if (!val.password) {
      error.password = "Enter a password";
    }

    return error;
  };

  render() {
    const { itemValues, error, isLoading } = this.state;
    return (
      <div className="container">
        <h1 className="text-center mb-5">Profile Page</h1>

        <div className="container mb-5">
          <ProfileUpdateItemComponent initialValues={itemValues} />
        </div>

        <div className="container w-50 my-5">
          {error && (
            <div className="container alert alert-danger">
              Invalid credentials
            </div>
          )}
          {isLoading && (
            <div className="container alert alert-info">Loading</div>
          )}
          <ProfileUpdateFormComponent
            initialValues={itemValues}
            handleSubmit={this.handleSubmit}
            handleValidate={this.handleValidate}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
