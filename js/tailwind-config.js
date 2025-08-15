// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF6B5A',
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#f9fafb',
                    foreground: '#000000',
                },
                muted: {
                    DEFAULT: '#f9fafb',
                    foreground: '#4b5563',
                },
                border: '#d1d5db',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Satoshi', 'Inter', 'sans-serif'],
            },
        },
    },
}