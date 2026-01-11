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
          "primary": "#1ECAD3",
          "secondary": "#0A2540",
          "accent": "#1ECAD3",
          "neutral": "#3d4451",
          "base-100": "#ffffff", // লাইট মোড ব্যাকগ্রাউন্ড সাদা
        },
        dark: {
          "primary": "#1ECAD3",
          "secondary": "#0A2540",
          "accent": "#1ECAD3",
          "neutral": "#191D24",
          "base-100": "#0A2540", // আপনার ব্র্যান্ডের Deep Blue ডার্ক মোড ব্যাকগ্রাউন্ড হিসেবে
          "base-content": "#ffffff", // ডার্ক মোডে টেক্সট সাদা
        },
      },
    ],
  },
}