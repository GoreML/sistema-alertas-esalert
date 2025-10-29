import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'alert-verde': '#10b981',
        'alert-amarillo': '#f59e0b',
        'alert-naranja': '#f97316',
        'alert-rojo': '#ef4444',
      },
    },
  },
  plugins: [],
};

export default config;