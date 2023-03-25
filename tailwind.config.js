/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      colors: {
        myCoral: "#EF8354",
        mySilver: "#BFC0C0",
        myGray: "#4F5D75",
        myGunMetal: "#2D3142"
      }
    },
  },
  plugins: [],
}