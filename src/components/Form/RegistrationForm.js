import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
// import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function RegistrationForm() {
  useEffect(() => {
    document.title="Sign Up"
  })
  let navigate = useNavigate();
  const genderOptions = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Custom", value: "Custom" },
  ];

  const initialValues = {
    fastName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    genderOption: "",
    birthDate: null,
  };

  const validationSchema = Yup.object({
    fastName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(11)
      .required("A phone number is required"),
    genderOption: Yup.string().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values, formik) => {
    console.log("Form data", values);
    // values = JSON.stringify(values)
    // axios.post(`http://localhost:5000/user/register`, { values }).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });

    fetch("http://localhost:5000/user/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem('token', data.token);
        navigate('/logout');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // formik.resetForm();
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
            <Form className="border p-4 mt-5">
              <h1 className="text-center"> Sign Up</h1>
              <p className="text-center mb-5">It's quick and easy</p>
              <div className="row">
                <div className="col">
                  <FormikControl
                    control="input"
                    type="text"
                    label="First Name"
                    name="fastName"
                  />
                </div>
                <div className="col">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Last Name"
                    name="lastName"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />
                </div>
                <div className="col">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Phone number"
                    name="phone"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                  />
                </div>
                <div className="col">
                  <FormikControl
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <FormikControl
                    control="radio"
                    label="Gender"
                    name="genderOption"
                    options={genderOptions}
                  />
                </div>
                <div className="col">
                  <FormikControl
                    control="date"
                    label="Birthday"
                    name="birthDate"
                  />
                </div>
              </div>

              <div className="text-center mt-5">

                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Sign Up
                </button>

              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
