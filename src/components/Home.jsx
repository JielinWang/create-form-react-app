import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import Loader from "./Loader/Loader";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  // Formik Logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    },

    //Add Yup Validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("Password is Required"),
      occupation: Yup.string().oneOf(
        occupations,
        "Must only select one occupation"
      ),
      state: Yup.string().oneOf(states, "Must only select one state"),
    }),
  });
  //Submit Form

  onSubmit: (values) => {
    console.log(values);
    navigate({ pathname: "/success", query: values });
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      {loading === true ? (
        <Loader />
      ) : (
        <main className="h-screen items-center flex justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white flex rounded-lg font-latoRegular"
          >
            <div className="flex-1 text-gray-700  p-20">
              <h1 className="text-3xl pb-2 font-latoBold">
                Let's get started 👋
              </h1>
              <p className="text-lg  text-gray-500">
                Tell us your information. Start to fill out this form to
                continue!
              </p>
              <div className="mt-6">
                {/* Name input field */}
                <div className="pb-4">
                  <label
                    htmlFor="name"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.name && formik.errors.name
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : "Full Name"}
                  </label>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-purple-400 focus:ring-purple-400 "
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your full name"
                  />
                </div>
                {/* Email input field */}
                <div className="pb-4">
                  <label
                    htmlFor="email"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.email && formik.errors.email
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : "Email"}
                  </label>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-purple-400 focus:ring-purple-400 "
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email address"
                  />
                </div>
                {/* Password input field */}
                <div className="pb-4">
                  <label
                    htmlFor="password"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.password && formik.errors.password
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : "Password"}
                  </label>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-purple-400 focus:ring-purple-400 "
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your password"
                  />
                </div>
                {/* Occupation input field */}
                <div className="pb-4">
                  <label
                    htmlFor="occupation"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.occupation && formik.errors.occupation
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.occupation && formik.errors.occupation
                      ? formik.errors.occupation
                      : "Occupation"}
                  </label>
                  <select
                    value={formik.values.occupation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="occupation"
                    defaultValue={"DEFAULT"}
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-purple-400 focus:ring-purple-400 "
                  >
                    <option value="DEFAULT" disabled="disabled">
                      -- select one --
                    </option>
                    <option value="Dentist">- Dentist</option>
                    <option value="Therapist">- Therapist</option>
                    <option value="Law">- Lawyer, Judge</option>
                    <option value="Military">- Military</option>
                  </select>
                </div>
                {/* State input field */}
                <div className="pb-4" required="required">
                  <label
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.state && formik.errors.state
                        ? "text-red-400"
                        : ""
                    } `}
                    htmlFor="state"
                  >
                    {formik.touched.state && formik.errors.state
                      ? formik.errors.state
                      : "State"}
                  </label>
                  <select
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="state"
                    defaultValue={"DEFAULT"}
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-purple-400 focus:ring-purple-400 "
                  ></select>
                </div>
                <button
                  type="submit"
                  className="bg-purple-400 font-latoBold text-lg text-white py-3 mt-6 rounded-lg w-full"
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </main>
      )}
    </m.div>
  );
};

export default Home;
