/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        'Light-red-primary': 'hsl(0, 100%, 67%)',
        'Orangey-yellow-primary': 'hsl(39, 100%, 56%)',
        'Green-teal-primary': 'hsl(166, 100%, 37%)',
        'Cobalt-blue-primary': 'hsl(234, 85%, 45%)',

        'Light-slate-blue-background': 'hsl(252, 100%, 67%)',
        'Light-royal-blue-background': 'hsl(241, 81%, 54%)',
        'Violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue-circle': 'hsla(241, 72%, 46%, 1)',
        'Persian-blue-circle01': 'hsla(241, 72%, 46%, 0.4)',

        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Dark-gray-blue': 'hsl(224, 30%, 27%)'
      },

      fontFamily: {
        'Hanken-medium': ['Hanken-medium'],
        'Hanken-bold': ['Hanken-bold'],
        'Hanken-extrabold': ['Hanken-extrabold']
      }
    },
  },
  plugins: [],
}

