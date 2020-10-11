import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AuthService from "../services/AuthService";
import AuthSession from "../utils/AuthSession";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authValues: { username: "", password: "" },
      isError: false,
      isLoading: false,
    };
  }

  handleSubmit = (val) => {
    const { username: currentUsername, password: currentPassword } = val;

    this.setState({ isLoading: true });

    AuthService.handleLogin({
      username: currentUsername,
      password: currentPassword,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201 && res.data === "no user found") {
          this.setState({ isError: true });
        } else {
          const { fullName, username, email, password } = {
            fullName: res.data[0].firstName + " " + res.data[0].lastName,
            username: val.username,
            email: res.data[0].email,
            password: val.password,
          };
          AuthSession.handleLoginSucceed({
            fullName,
            username,
            email,
            password,
          });
          this.forceUpdate();
          alert("login success");
          this.props.history.replace(`/home`);
        }
      })
      .catch((err) => {
        this.setState({ isError: true });
        console.log(err);
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

    if (!val.password) {
      error.password = "Enter a password";
    }

    return error;
  };

  render() {
    const { authValues, isError, isLoading } = this.state;
    return (
      <div className="container">
        <h1 className="mb-5">Login Page</h1>
        <div className="container d-md-flex justify-content-center flex-md-column w-50">
          {isError && (
            <div className="container alert alert-danger">
              Invalid credentials
            </div>
          )}

          {isLoading && (
            <div className="container alert alert-info">Loading</div>
          )}
          <Formik
            initialValues={authValues}
            onSubmit={this.handleSubmit}
            validate={this.handleValidate}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="mb-4">
                  <label htmlFor="username">Username</label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                  />
                </fieldset>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="mb-4">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </fieldset>

                <button type="submit" className="btn btn-outline-primary mb-4">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default LoginPage;
