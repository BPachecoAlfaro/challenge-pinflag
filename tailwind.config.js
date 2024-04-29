/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokedex: {
          white: '#FFFFFF'
        },
        pokemonTypeColor: {
          bug: "#A7B723",
          dark: "#75574C",
          dragon: "#7033FF",
          electric: "#F9CF30",
          fairy: "#E69EAC",
          fighting: "#C12239",
          fire: "#F57D31",
          flying: "#A891EC",
          ghost: "#70559B",
          normal: "#AAA67F",
          grass: "#74CB48",
          ground: "#DEC16B",
          ice: "#9AD6DF",
          poison: "#A43E9E",
          psychic: "#FB5584",
          rock: "#B69E31",
          steel: "#B7B9D0",
          water: "#6493EB",
        }
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto'],
      },
    },
  },
  plugins: [],
}

