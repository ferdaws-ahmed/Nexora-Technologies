/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'nexora-blue': '#0A2540',
        'nexora-teal': '#1ECAD3',
      }
    },
  },
  plugins: [require("daisyui")],

  
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#1ECAD3",      
          "secondary": "#0A2540",    
          "accent": "#1ECAD3",
          "base-100": "#ffffff",     
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#1ECAD3",
          "secondary": "#0A2540",
          "base-100": "#0A2540",     
          "base-content": "#ffffff",
        },
      },
    ],
  },
}