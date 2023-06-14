/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Configure your color palette here
      black: "#000000",
      white: "#FFFFFF",
      slate: "#0f172a",
      red: "#EE0000",
      green: {
        green: "#00AB55",
        shady: "#008746",
      },
      pink: {
        tintier: "#F4A7D2",
        tintish: "#E94EA5",
      },
      blue: {
        normal: "#003366",
        tintish: "#335C85",
        tintiest: "#CCD6E0",
        light: "#E5EAEF",
        shady: "#001A4D",
      },
      gray: {
        gray: "#8293A3",
        grayer: "#D9D9D9",
        light: "#F2F2F2",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
