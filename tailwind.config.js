 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graduate: ['"Graduate"', "serif"],
        courgette: ['"Courgette"', "cursive"],
        cutive: ['"Cutive"', "serif"],
        merienda: ['"Merienda One"', "cursive"],
        satisfy: ['"Satisfy"', "cursive"],
        lobster: ['"Lobster Two"', "cursive"],
        pinyon: ['"Pinyon Script"', "cursive"],
        pacifico: ['"Pacifico"', "cursive"],
        bangers: ['"Bangers"', "cursive"],
        dancing: ['"Dancing Script"', "cursive"],
        playfair: ['"Playfair Display"', "serif"],
        vibes: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
