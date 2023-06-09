/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000207", //#00040d
        secondary: "#aaa6c3",
        tertiary: "#915EFF",
        alternative: '#193F93'
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        cardi: "-1px 15px 20px -15px #211e35",
      },
      screens: {
        xs: "450px",
        bp: "1087px",
        fbp: "990px",
        hbp:'1230px',
        hbpi:'890px',
        wbp:'782px',
        fbpi:'723px',
        'mhbp': {'max': '1230px'},
        'mxs': {'max': '450px'}
      }
    },
  },
  plugins: [],
}

