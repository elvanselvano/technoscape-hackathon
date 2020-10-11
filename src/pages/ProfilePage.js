import React, { Component } from "react";
import AuthSession from "../utils/AuthSession";

import ProfileUpdateFormComponent from "../components/ProfileUpdateFormComponent";
import ProfileUpdateItemComponent from "../components/ProfileUpdateItemComponent";

import UserService from "../services/UserService";

import moment from "moment";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      itemValues: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
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

        const {
          username,
          email,
          password,
          dateOfBirth,
          gender,
          firstName,
          lastName,
        } = res.data;

        AuthSession.handleLoginSucceed({
          username,
          email,
          password,
          dateOfBirth,
          gender,
          firstName,
          lastName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (val) => {
    const { email, password, dateOfBirth, gender, firstName, lastName } = val;
    const { username } = AuthSession.handleGetUser();
    const userToUpdate = {
      username,
      email,
      password,
      dateOfBirth: moment(dateOfBirth).format("YYYY+MM+DD"),
      gender,
      firstName,
      lastName,
    };

    this.setState({ isLoading: true });
    UserService.update({ userToUpdate })
      .then((res) => {
        console.log(res);
        if (res.status !== 201) return null;

        AuthSession.handleLoginSucceed({
          username,
          email,
          password,
          dateOfBirth,
          gender,
          firstName,
          lastName,
          fullName: firstName + " " + lastName,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleValidate = (val) => {
    const error = {};

    if (!val.firstName) {
      error.firstName = "Enter a first name";
    }

    if (!val.lastName) {
      error.lastName = "Enter a last name";
    }

    if (!val.gender) {
      error.gender = "Enter a gender";
    }

    if (!val.dateOfBirth) {
      error.dateOfBirth = "Enter a date of birth";
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
    const { itemValues, isError, isLoading } = this.state;

    return (
      <div className="container">
        <h1 className="text-center mb-5">Profile Page</h1>

        <div className="container w-75 my-5">
          {isError && (
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
