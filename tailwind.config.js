/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired premium color palette
        'apple-gray': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#1a1a1a',
        },
        'apple-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#007AFF', // Apple Blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#2c2c2e', // Apple Dark Gray
          800: '#1c1c1e', // Apple System Black
          900: '#000000',
          navy: '#1c1c1e',
          green: '#064E3B',
        },
        secondary: {
          gold: '#FF9500', // Apple Orange
          bronze: '#FF6B35',
        },
        accent: {
          purple: '#AF52DE', // Apple Purple
          green: '#30D158', // Apple Green
          orange: '#FF9500', // Apple Orange
          red: '#FF3B30', // Apple Red
        },
        surface: {
          primary: '#ffffff',
          secondary: '#f2f2f7',
          tertiary: '#ffffff',
          elevated: '#ffffff',
        },
        text: {
          primary: '#000000',
          secondary: '#6d6d70',
          tertiary: '#8e8e93',
          quaternary: '#c7c7cc',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'system-ui',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif'
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Menlo',
          'Consolas',
          'monospace'
        ],
      },
      fontSize: {
        'display-large': ['76px', { lineHeight: '84px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-large': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'title-large': ['32px', { lineHeight: '40px', letterSpacing: '0em', fontWeight: '600' }],
        'title': ['28px', { lineHeight: '36px', letterSpacing: '0em', fontWeight: '600' }],
        'body-large': ['20px', { lineHeight: '32px', letterSpacing: '0em', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '28px', letterSpacing: '0em', fontWeight: '400' }],
        'caption': ['15px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'apple': '20px',
        'apple-sm': '12px',
        'apple-lg': '28px',
        'apple-xl': '40px',
      },
      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 16px 64px rgba(0, 0, 0, 0.16)',
        'apple-elevation-1': '0 1px 4px rgba(0, 0, 0, 0.06)',
        'apple-elevation-2': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'apple-elevation-3': '0 12px 48px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'apple': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
