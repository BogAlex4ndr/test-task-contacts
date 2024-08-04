/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "460px", // everything higher than 460px is considered as a tablet-sized markup
        md: "767px", // everything higher than 767px is considered as a laptop-sized markup

      },
      boxShadow: {
        custom: '0px 0px 22px #152731'
      },
      colors: {
        primaryBackground: "#152731",
        primary: "#152731",
        primaryHover: "#E78A00",
        orange: "#FFBD5A",
        black: "#000000",
        grey: {
          1000: "#6C6C6C",
          1010: "#D0D0D0",
          1020: "#EEEEEE",
          1030: "#F2F2F2",
          1040: "##FDFDFD",
        },
        green: "#2BBF06",
        red: "#D22219",
        blue: "#0000EB",
      },
    },
  },
  plugins: [],
}

