/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        'Light-red-primary': 'hsla(0, 100%, 67%, 0.090)',
        'Light-red-text': 'hsla(0, 100%, 67%, 1)',
        'Orangey-yellow-primary': 'hsla(39, 100%, 56%, 0.090)',
        'Orangey-yellow-text': 'hsla(39, 100%, 56%, 1)',
        'Green-teal-primary': 'hsla(166, 100%, 37%, 0.090)',
        'Green-teal-text': 'hsla(166, 100%, 37%, 1)',
        'Cobalt-blue-primary': 'hsla(234, 85%, 45%, 0.090)',
        'Cobalt-blue-text': 'hsla(234, 85%, 45%, 1)',

        'Light-slate-blue-background': 'hsl(252, 100%, 67%)',
        'Light-royal-blue-background': 'hsl(241, 81%, 54%)',
        'Violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue-circle': 'hsla(241, 72%, 46%, 1)',
        'Persian-blue-circle01': 'hsla(241, 72%, 46%, 0)',

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

