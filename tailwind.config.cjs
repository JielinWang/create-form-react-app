/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        latoRegular: "Lato-Regular",
        latoBold: "Lato-Bold",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
