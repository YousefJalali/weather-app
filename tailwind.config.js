/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,json}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx,svg}',
    './public/**/*.{svg}',
  ],
  theme: {
    colors: {
      brand: {
        primary: {
          DEFAULT: '#0066FF',
          100: '#F5F9FF',
          200: '#CCE0FF',
          300: '#A3C8FF',
          400: '#7AAFFF',
          500: '#5297FF',
          600: '#297EFF',
          700: '#0066FF',
          800: '#0050C7',
          900: '#00398F',
        },
      },

      utility: {
        action: '#009ce3',
        information: '#4d6680',
        confirmation: '#78a100',
        warning: '#f2b600',
        critical: '#e81c00',
        rating: '#ffc120',
        saved: '#e44753',
      },

      content: {
        contrast: 'rgba(19, 41, 63, 1)',
        default: 'rgba(19, 41, 63, 0.8)',
        subtle: 'rgba(19, 41, 63, 0.65)',
        nonessential: 'rgba(19, 41, 63, 0.4)',
      },

      layout: {
        divider: 'rgba(167, 174, 181, 0.6)',
        level0: 'rgba(255, 255, 255, 1)',
        level0accent: 'rgba(237, 240, 242, 1)',
        level1: 'rgba(249, 250, 251, 1)',
        level1accent: 'rgba(228, 231, 235, 1)',
        level2: 'rgba(242, 245, 247, 1)',
        level2accent: 'rgba(220, 225, 230, 1)',
        level3: 'rgba(235, 239, 242, 1)',
        level3accent: 'rgba(211, 216, 222, 1)',
      },
    },

    extend: {
      dropShadow: ({ theme }) => ({
        glow: `0 0 4px ${theme('colors.brand.primary.DEFAULT')}`,
      }),

      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      keyframes: {
        sun: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moon: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        star: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        cloud1: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(2px, 0px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        cloud2: {
          '0%': { transform: 'translate(-5px, 0px)' },
          '50%': { transform: 'translate(10px, 0px)' },
          '100%': { transform: 'translate(-5px, 0px)' },
        },
        rain: {
          '0%': { strokeDashoffset: 0 },
          '100%': { strokeDashoffset: -100 },
        },
        snow: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },

          '33.33%': {
            transform: 'translateX(-1.2px) translateY(2px)',
          },

          '66.66%': {
            transform: 'translateX(1.4px) translateY(4px)',
            opacity: 1,
          },

          '100%': {
            transform: 'translateX(-1.6px) translateY(6px)',
            opacity: 0,
          },
        },
        snowReverse: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },

          '33.33%': {
            transform: 'translateX(1.2px) translateY(2px)',
          },

          '66.66%': {
            transform: 'translateX(-1.4px) translateY(4px)',
            opacity: 1,
          },

          '100%': {
            transform: 'translateX(1.6px) translateY(6px)',
            opacity: 0,
          },
        },
        stroke: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },

          '2%': {
            transform: 'translate(0.3px, 0px)',
          },

          '4%': {
            transform: 'translate(0px, 0px)',
          },

          '6%': {
            transform: 'translate(0.5px, 0.4px)',
          },

          '8%': {
            transform: 'translate(0px, 0px)',
          },

          '10%': {
            transform: 'translate(0.3px, 0px)',
          },

          '12%': {
            transform: 'translate(0px, 0px)',
          },

          '14%': {
            transform: 'translate(0.3px, 0px)',
          },

          '16%': {
            transform: 'translate(0px, 0px)',
          },

          '18%': {
            transform: 'translate(0.3px, 0px)',
          },

          '20%': {
            transform: 'translate(0px, 0px)',
          },

          '22%': {
            transform: 'translate(1px, 0px)',
          },

          '24%': {
            transform: 'translate(0px, 0px)',
          },

          '26%': {
            transform: 'translate(-1px, 0px)',
          },

          '28%': {
            transform: 'translate(0px, 0px)',
          },

          '40%': {
            fill: 'orange',
            transform: 'translate(0px, 0px)',
          },

          '65%': {
            fill: 'white',
            transform: 'translate(-1px, 5px)',
          },

          '61%': {
            fill: 'orange',
          },

          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        fog1: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },

          '50%': {
            transform: 'translate(7px, 0px)',
          },

          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        fog2: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },

          '21.05%': {
            transform: 'translate(-6px, 0px)',
          },

          '78.95%': {
            transform: 'translate(9px, 0px)',
          },

          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        fog3: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },

          '25%': {
            transform: 'translate(4px, 0px)',
          },

          '75%': {
            transform: 'translate(-4px, 0px)',
          },

          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        fog4: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },

          '50%': {
            transform: 'translate(-4px, 0px)',
          },

          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
      },
      animation: {
        sun: 'sun 9s linear infinite',
        moon: 'moon 6s linear infinite',
        star1: 'star 5s linear infinite 4s',
        star2: 'star 3s linear infinite 5s',
        cloud1: 'cloud1 3s linear infinite',
        cloud2: 'cloud2 7s linear infinite',
        rain1: 'rain 8s linear infinite',
        rain2: 'rain 8s linear infinite 0.25s',
        stroke: 'stroke 1.11s linear infinite',
        snow1: 'snow 2s linear infinite',
        snow2: 'snowReverse 2s linear infinite 1.2s',
        snow3: 'snowReverse 2s linear infinite',
        fog1: 'fog1 8s linear infinite',
        fog2: 'fog2 20s linear infinite',
        fog3: 'fog3 6s linear infinite',
        fog4: 'fog4 6s linear infinite',
      },
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       color: "red",
      //       span: {
      //         color: "red",
      //       },
      //     },
      //   },
      // }),
    },
  },
}
