/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#3b3b7b",
        "primary-300": "#23236b",
        "primary-500": "#00007e",
        "secondary-100": "#c7dfed",
        "secondary-300": "#c0dbeb",
        "secondary-500": "#BAD7E9"
      },
      backgroundImage: (theme) => ({
        "gradient-bluegray": "linear-gradient(90deg, #023236b 0%, #eb455f 100%)",
        // "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Monteserrat", "sans-serif"]
      },
      content: {
        quoteLeft: "url('./assets/quote-left-solid.png')",
        quoteRight: "url('./assets/quote-right-solid.png')",
        pawsSecondary: "url('./assets/paws-secondary.png')",
        pawsGray: "url('./assets/paws-gray.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    },
  },
  plugins: [],
}