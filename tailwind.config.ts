import type { Config } from 'tailwindcss'

const config: Config = {
  daisyui: {
    themes: [
      {
        mainTheme: {
          primary: "#18FBBF",
          secondary: "#003023",
          accent: "#09FBBB",
          neutral: "#0A0E0C",
          "base-100": "#030705",

          "--rounded-box": "1.2rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.7rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "2rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.4s", // duration of animation when you click on button
          "--animation-input": "0.3s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "1.05", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 7s ease-in-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '250% 250%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '250% 250%',
            'background-position': 'right center',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        'majorMono' : ["MajorMono", 'monospace'],
        'inconsolata': ["Inconsolata", "monospace"]
      },
      colors : {
        "text": "#f4fffb",
        "background": "#030705",
        "primary": "#18FBBF",
        "primary-dark": "#05b082",
        "primary-darker": "#00684c",
        "secondary": "#004432",
        "accent": "#09FBBB",
        "accident": "#000f0b",
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config