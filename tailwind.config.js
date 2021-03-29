module.exports = {
    purge: {
        content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.html',
            './src/**/*.pug',
            './src/**/*.md',
            './docs/**/*.md',
            './blog/**/*.md',
        ],
        options: {
            whitelist: [
                'body',
                'html',
                'img',
                'a',
                'g-image',
                'g-image--lazy',
                'g-image--loaded',
                'active',
            ],
        },
    },
    theme: {
        extend: {
            spacing: {
                '80': '20rem',
                '108': '27rem',
            },
            borderWidth: {
                '14': '14px',
            },
        },
        container: {
            padding: '1rem',
        },
        colors: {
            background: {
                primary: 'var(--bg-background-primary)',
                secondary: 'var(--bg-background-secondary)',
                tertiary: 'var(--bg-background-tertiary)',

                form: 'var(--bg-background-form)',
            },

            copy: {
                primary: 'var(--text-copy-primary)',
                secondary: 'var(--text-copy-hover)',
            },

            'border-color': {
                primary: 'var(--border-border-color-primary)',
            },

            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            green: {
                100: '#f0fff4',
                200: '#c6f6d5',
                300: '#9ae6b4',
                400: '#68d391',
                500: '#48bb78',
                600: '#38a169',
                700: '#2f855a',
                800: '#276749',
                900: '#22543d',
            },

            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#718096',
                700: '#4a5568',
                800: '#2d3748',
                900: '#1a202c',
            },

            indigo: {
                100: '#ebf4ff',
                200: '#c3dafe',
                300: '#a3bffa',
                400: '#7f9cf5',
                500: '#667eea',
                600: '#5a67d8',
                700: '#4c51bf',
                800: '#434190',
                900: '#3c366b',
            },

            blue: {
                400: '#3C92D6',
            },
        },
        fontFamily: {
            sans: [
                'Nunito Sans',
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif',
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
        },
        screens: {
            'xs': '320px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
    },
    variants: {
        // Some useful comment
    },
    plugins: [
        // Some useful comment
    ],
};
