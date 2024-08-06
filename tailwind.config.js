/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['index.html', './src/**/*.{html,js}'],
   theme: {
      extend: {
         colors: {
            violet: '#A9A5CB',
            red: '#fbd8d7',
            red2: '#935e5e',
            redhover: '#F59C9C',
         },

         gridTemplateColumns: {
            layout: '2fr 9fr',
            layout2: '3fr 9fr',
         },
      },

      screens: {
         '2xl': { max: '1535px' },
         xl: { max: '1279px' },
         lg: { max: '1023px' },
         md: { max: '767px' },
         sm: { max: '639px' },
      },
   },
   plugins: [],
   darkMode: 'selector',
};
