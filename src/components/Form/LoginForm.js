import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Link } from "react-router-dom";

function LoginForm() {
  useEffect(() => {
    document.title="Log In"
  })

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="form-group border p-4 rounded mt-5 ">
              <div className="row">
                <FormikControl
                  control="input"
                  // control='chakraInput'
                  type="email"
                  label="Email"
                  name="email"
                />
              </div>
              <div className="row">
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
              </div>

              <div className="text-center mt-3">
                <button
                  className="btn btn-success me-2"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Login
                </button>
                <Link to="/signup">
                  <button className="btn btn-primary link">Don't have any account ?</button>
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
