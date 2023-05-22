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
      black_ct: "#000000",
      white_ct: "#FFFFFF",
      slate_ct: "#0f172a",
      red_ct: "#EE0000",
      green_ct: {
        green_ct: "#00AB55",
        shady_ct: "#008746",
      },
      pink_ct: {
        tintier_ct: "#F4A7D2",
        tintish_ct: "#E94EA5",
      },
      blue_ct: {
        normal_ct: "#003366",
        tintish_ct: "#335C85",
        tintiest_ct: "#CCD6E0",
        light_ct: "#E5EAEF",
        shady_ct: "#001A4D",
      },
      gray_ct: {
        gray_ct: "#8293A3",
        grayer_ct: "#D9D9D9",
        light_ct: "#F2F2F2",
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
