/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => theme("colors"),
      colors:{
        black: '#000000',
        cream: '#FDFBF9',
        gray:{
          0: '#F4F4F4',
          20: '#9B9B9B',
          40: '#87898C',
          60: '#515151',
          80: '#333333',
          100: '#282828',
        },
        red: '#f00',
      },
      fill: theme => theme("colors"),
      fontSize:{      
        '10':    '10px',
        '12':    '12px',
        '14':  '14px',
        'DEFAULT':'16px',
        '18':    '18px',
        '20':     '20px',
        '22':    '22px',
        '26':    '26px',
        '28':    '28px',
        '30':    '30px',
        '32':    '32px',
        '36':    '36px',
        '40':     '40px',
        '46':    '46px',
        '50':    '50px',
        '60':    '60px'
      },
      fontFamily:{
        'kazimir': ['Kazimir','Helvetica', 'Arial', 'sans-serif'],
        'muller': ['Muller','Helvetica', 'Arial', 'sans-serif'],
        'ptsans': ['PT Sans','Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight:{
        'light': '300',
        'normal':'400',
        'medium': '500',
        'semibold':'600',
        'bold':'700',
        'extrabold':'800',
        'black':'900'
      },
      lineHeight: {
        '0': '0',
      },
      screens: {
        xs: "390px",
        sm: "440px",
        md: "768px",
        lg: "992px",
        exlg: "1200px",
        xl: "1466px",
        xxl: '1600px'
      },
      spacing: {
        "auto": "auto",
        "0": "0",
        "2": "2px",
        "4": "0.25rem",
        "6": "0.375rem",
        "8": "0.5rem",
        "10": "0.6rem",
        "12": "0.75rem", // FOR CONTAINER PADDING ONLY ABOVE TABLET
        "14": "0.875rem", //14px
        "16": "1rem", // 16px
        "18": "1.1245rem", // 18px
        "20": "1.25rem", // 20px
        "24": "1.5rem", // 24px
        "28": "1.75rem", // 24px
        '30': "1.875rem", //30px
        "32": "2rem", // 32px
        "36": "2.25rem", // 36px
        "40": "2.5rem", //40px
        "48": "3rem", //48px
        "56": "3.5rem", // 56px
        "60": "3.75rem", // 56px
        "64": "4rem", // 64px
        "76": "4.75rem", // 76px
        "80": "5rem", // 80px
        "96": "6rem", // 96px
        "100": "6.25rem", // 100px
        "112": "7rem", // 112px
        "144": "9rem", // 144px
        "1/10": "10%",
        "2/10": "20%"
      }
    },
  },
  plugins: [],
}