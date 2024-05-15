/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        color: "#11453B",
      },

      screens: {
        mobile: "250px",
        tablet: "830px",
        desktop: "960px",
      },

      fontSize: {
        "font-size": "8px",
        lg: "14px",
        sm: "10px",
        xm: "6px",
      },

      borderColor: {
        "bg-bd-color": "#11453B",
        "box-shadow": "0px 8px 16px 0px rgba(17, 69, 59, 0.20)",
      },
      colors: {
        purple: "#781d42",
        maroon: "#a3423c",
        orange: "#de834d",
        pastel: "#F0d290",
      },
      padding: {
        sm: "1rem",
      },
      width: {
        lg: "25rem",
        sm: "20.9rem",
      },
      height: {
        lg: "25rem",
        sm: "20rem",
      },

      borderRadius: {
        lg: "21rem",
      },
    },
  },
  plugins: [require("daisyui")],
};

