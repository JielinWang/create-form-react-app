import React from "react";
import SelectUSState from "react-select-us-states";

const Home = () => {
  const setNewValue = (value) => {
    console.log(value);
  };

  return (
    <main className="h-screen items-center flex justify-center">
      <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700  p-20">
          <h1 className="text-3xl pb-2 font-latoBold">Let's get started 👋</h1>
          <p className="text-lg  text-gray-500">
            Tell us your information. Start to fill out this form to continue!
          </p>
          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-purple-400 focus:ring-purple-400 "
                type="text"
                name="name"
                placeholder="Enter your full name"
                required="required"
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-purple-400 focus:ring-purple-400 "
                type="email"
                name="email"
                placeholder="Enter your email address"
                required="required"
              />
            </div>
            {/* Password input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:outline-purple-400 focus:ring-purple-400 "
                type="password"
                name="password"
                placeholder="Enter your password"
                required="required"
              />
            </div>
            {/* Occupation input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="occupation"
              >
                Occupation
              </label>
              <select className="border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-purple-400 focus:ring-purple-400 ">
                <option value="" selected="selected" disabled="disabled">
                  -- select one --
                </option>
                <option value="Dentist">- Dentist</option>
                <option value="Therapist">- Therapist</option>
                <option value="Law">- Lawyer, Judge</option>
                <option value="Military">- Military</option>
              </select>
            </div>
            {/* Country input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="state"
              >
                State
              </label>
              <SelectUSState
                className="border-2 border-gray-500 p-2 rounded-md w-1/2  focus:outline-purple-400 focus:ring-purple-400 "
                onChange={setNewValue}
              />
            </div>
          </div>
        </div>
        <div></div>
      </form>
    </main>
  );
};

export default Home;
