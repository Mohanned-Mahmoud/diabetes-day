/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#65cbcc',
          hover: '#52b7b8',
          light: '#e6f7f7',
        },
        secondary: {
          DEFAULT: '#62c1e0',
          hover: '#4faecf',
          light: '#eaf6fb',
        },
        navy: {
          DEFAULT: '#1a4668',
          dark: '#0f2c42',
          deep: '#0a1d2c',
          light: '#285d87',
        },
        vitality: {
          DEFAULT: '#3baf78',
          hover: '#319465',
          light: '#e9f7f0',
        },
        lime: {
          brand: '#92c34e',
        },
      },
      fontFamily: {
        arabic: ['"Noto Sans Arabic"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'section': '2.5rem',
      },
      boxShadow: {
        'glow-teal': '0 0 35px -5px rgba(101, 203, 204, 0.35)',
        'glow-navy': '0 20px 50px -10px rgba(26, 70, 104, 0.25)',
        'glass': '0 8px 32px 0 rgba(26, 70, 104, 0.08)',
        'card-hover': '0 25px 60px -15px rgba(26, 70, 104, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

