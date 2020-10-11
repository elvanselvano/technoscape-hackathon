import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

class ProfileUpdateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { initialValues, handleValidate, handleSubmit } = this.props;

    return (
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={handleValidate}
          enableReinitialize
        >
          {(props) => (
            <Form>
              <div className="container d-md-flex flex-md-row">
                <div className="container d-md-flex flex-md-column">
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="my-2">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="form-control"
                    />
                  </fieldset>

                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="my-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="form-control"
                    />
                  </fieldset>

                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="my-2">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      type="text"
                      className="form-control"
                      value={props.values.gender}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    >
                      <option value="Others" label="Others" />
                      <option value="Male" label="Male" />
                      <option value="Female" label="Female" />
                    </select>
                  </fieldset>
                </div>
                <div className="container d-md-flex flex-md-column">
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="my-2">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <Field
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      className="form-control"
                    />
                  </fieldset>

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="my-2">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                    />
                  </fieldset>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="my-2">
                    <label htmlFor="password">Password</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                    />
                  </fieldset>
                </div>
              </div>

              <button type="submit" className="btn btn-outline-primary my-5">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ProfileUpdateFormComponent;
