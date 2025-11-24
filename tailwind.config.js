/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peren: {
          white: '#FFFFFF',
          ink: '#000000',
          midnight: '#0C0C2D',
          stone: '#979797',
          lilac: '#DCCDFF',
          sun: '#FDFFCD',
          silver: '#D9D9D9',
          cloud: '#D3D3D3',
        },
      },
      fontFamily: {
        inter: ['"InterVariable"', 'Inter', 'system-ui', 'sans-serif'],
        avenir: ['"Avenir Next"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'micro': ['0.625rem', '0.76rem'], // 10px / 12.1px
        'body-xs': ['0.75rem', '0.91rem'], // 12px / 14.5px
        'body-sm': ['0.875rem', '1.06rem'], // 14px / 17px
        'body-md': ['0.9375rem', '1.13rem'], // 15px / 18.1px
        'body-lg': ['1.25rem', '1.51rem'], // 20px / 24.2px
        'eyebrow': ['1.5rem', '1.81rem'], // 24px / 29px
        'kicker': ['2rem', '2.42rem'], // 32px / 38.7px
        'display-sm': ['2.5rem', '3.02rem'], // 40px / 48.4px
        'display': ['3rem', '3.63rem'], // 48px / 58px
      },
      borderRadius: {
        10: '10px',
        22: '22px',
        33: '33px',
        46: '46px',
        55: '55px',
        60: '60px',
        pill: '207.5px',
      },
      spacing: {
        'section-sm': '3.5rem',
        section: '5rem',
        'section-lg': '7rem',
      },
      backgroundImage: {
        'peren-hero': 'linear-gradient(270deg, #FDFFCD 0%, #DCCDFF 100%)',
        'peren-panel': 'linear-gradient(180deg, #DCCDFF 0%, #FDFFCD 100%)',
        'peren-vertical': 'linear-gradient(0deg, #DCCDFF 0%, #FDFFCD 100%)',
        'peren-neutral': 'linear-gradient(0deg, #D9D9D9 0%, #D3D3D3 100%)',
      },
      boxShadow: {
        card: '0 20px 45px rgba(12, 12, 45, 0.08)',
      },
    },
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}

