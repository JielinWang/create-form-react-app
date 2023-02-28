import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import Loader from "./Loader/Loader";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { motion as m, sync } from "framer-motion";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //Loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  //Get data from API
  const getAllData = async () => {
    await axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllData();
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

    //Validation Schema with Yup
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
      occupation: Yup.string().required("Occupation is Required"),
      state: Yup.string().required("State is Required"),
    }),

    //Send post submitting Form
    onSubmit: async (values) => {
      const response = await axios
        .post("https://frontend-take-home.fetchrewards.com/form", values)
        .then((res) => {
          console.log(res);
          navigate("/success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" w-full "
    >
      {loading === true ? (
        <Loader />
      ) : (
        <main className="  h-screen items-center flex justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded-lg font-latoRegular"
          >
            <div className=" text-gray-700  p-20">
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
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-purple-400 focus:ring-purple-400 "
                  >
                    <option>-- select one --</option>
                    {data.occupations.map((occupation, i) => {
                      return <option key={i}>{occupation}</option>;
                    })}
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
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-purple-400 focus:ring-purple-400 "
                  >
                    <option>-- select one --</option>
                    {data.states.map((state, i) => {
                      return <option key={i}>{state.name}</option>;
                    })}
                  </select>
                </div>
                {/* Submit button */}
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
