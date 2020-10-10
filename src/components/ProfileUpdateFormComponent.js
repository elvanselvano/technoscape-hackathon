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
              <div className="container d-md-flex flex-md-column">
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="my-2">
                  <label htmlFor="username">Username</label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                  />
                </fieldset>

                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="my-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
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
                    type="text"
                    className="form-control"
                  />
                </fieldset>
              </div>
              <button type="submit" className="btn btn-outline-primary my-4">
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
