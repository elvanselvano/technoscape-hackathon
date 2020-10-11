import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AuthService from "../services/AuthService";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authValues: { username: "", email: "", password: "", fullName: "" },
      isLoading: false,
    };
  }

  handleSubmit = (val) => {
    const { username, email, password, fullName } = val;

    this.setState({ isLoading: true });
    AuthService.handleRegister({ username, email, password, fullName })
      .then((res) => {
        if (res.data === "username or email is taken") {
          alert(res.data);
        } else {
          this.props.history.replace("/auth/login");
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleValidate = (val) => {
    const error = {};
    if (!val.username) {
      error.username = "Enter a proper username";
    }

    if (!val.email) {
      error.email = "Enter a proper email";
    }

    if (!val.password) {
      error.password = "Enter a proper password";
    }

    if (!val.fullName) {
      error.fullName = "Enter a proper Full Name";
    }

    return error;
  };

  render() {
    const { authValues, isLoading } = this.state;
    return (
      <div className="container">
        <h1 className="mb-5">Register Page</h1>

        <div className="container d-md-flex justify-content-center flex-md-column w-50">
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
                  name="fullName"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="mb-4">
                  <label htmlFor="fullName">Full Name</label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                  />
                </fieldset>

                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="mb-4">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="form-control "
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
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
