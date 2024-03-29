const {
  keyframesConfig,
  animationConfig,
  colorsConfig,
  spacingConfig,
} = require('./tailwindConfig')

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: colorsConfig,
    extend: {
      borderRadius: {
        DEFAULT: '4px',
      },
      spacing: spacingConfig,
      animation: animationConfig,
      keyframes: keyframesConfig,
    },
  },
  plugins: [],
}
