/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
        // Ensure gradient classes are never purged
        'bg-gradient-to-br',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-blue-600',
        'from-green-500',
        'to-green-600',
        'from-orange-500',
        'to-orange-600',
        'from-purple-500',
        'to-purple-600',
        'from-cyan-500',
        'to-cyan-500',
        'from-pink-500',
        'to-pink-500',
        'from-emerald-500',
        'to-emerald-500',
        'from-red-500',
        'to-rose-500',
        'from-blue-400',
        'to-blue-600',
        'from-purple-400',
        'to-purple-600',
        'from-green-400',
        'to-green-600',
        'from-indigo-400',
        'to-indigo-600',
        'from-orange-400',
        'to-orange-600',
        'from-red-400',
        'to-red-600',
        'from-gray-400',
        'to-gray-600',
        'bg-clip-text',
        'text-transparent'
    ],
    theme: {
        extend: {
            // Modern Design System
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                secondary: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    900: '#581c87',
                },
                accent: {
                    50: '#ecfeff',
                    500: '#06b6d4',
                    600: '#0891b2',
                },
                surface: {
                    0: '#ffffff',
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },

            // Enhanced Typography
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1.1' }],
                '6xl': ['3.75rem', { lineHeight: '1.1' }],
                '7xl': ['4.5rem', { lineHeight: '1.1' }],
                '8xl': ['6rem', { lineHeight: '1.1' }],
                '9xl': ['8rem', { lineHeight: '1.1' }],
                'fluid-sm': 'clamp(0.875rem, 2vw, 1.125rem)',
                'fluid-md': 'clamp(1rem, 2.5vw, 1.5rem)',
                'fluid-lg': 'clamp(1.25rem, 3vw, 2rem)',
                'fluid-xl': 'clamp(1.5rem, 4vw, 3rem)',
                'fluid-2xl': 'clamp(2rem, 5vw, 4rem)',
            },

            // Professional Spacing Scale
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
                '144': '36rem',
            },

            // Advanced Animations
            animation: {
                // Entry animations
                'fade-in': 'fadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                'scale-in': 'scaleIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)',

                // Continuous animations
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out infinite 3s',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'spin-slow': 'spin 20s linear infinite',
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',

                // Interactive animations
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'shake': 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'gradient-shift': 'gradientShift 8s ease infinite',
                'gradient-x': 'gradientX 3s ease infinite',
                'gradient-y': 'gradientY 3s ease infinite',

                // Modern effects
                'blur-in': 'blurIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                'slide-down': 'slideDown 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                'zoom-in': 'zoomIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                'flip-in': 'flipIn 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-1deg)' },
                    '50%': { transform: 'rotate(1deg)' },
                },
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
                    '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                gradientX: {
                    '0%, 100%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(100%)' },
                },
                gradientY: {
                    '0%, 100%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translateY(100%)' },
                },
                blurIn: {
                    '0%': { filter: 'blur(4px)', opacity: '0' },
                    '100%': { filter: 'blur(0)', opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                zoomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.5)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                flipIn: {
                    '0%': { opacity: '0', transform: 'rotateY(-90deg)' },
                    '100%': { opacity: '1', transform: 'rotateY(0)' },
                },
            },

            // Modern Background Gradients
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'hero-modern': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%)',
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                'premium-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
            },

            // Enhanced Shadows
            boxShadow: {
                'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
                'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
                'premium': '0 32px 64px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
                'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
            },

            // Enhanced Blur
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '12px',
                'lg': '16px',
                'xl': '24px',
                '2xl': '40px',
                '3xl': '64px',
            },

            // Modern Border Radius
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
                'full': '9999px',
            },

            // Enhanced Z-Index
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [
        // Custom utilities plugin
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow': {
                    textShadow: '0 2px 4px rgba(0,0,0,0.10)',
                },
                '.text-shadow-lg': {
                    textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
                },
                '.perspective-1000': {
                    perspective: '1000px',
                },
                '.preserve-3d': {
                    transformStyle: 'preserve-3d',
                },
                '.backface-hidden': {
                    backfaceVisibility: 'hidden',
                },
            }
            addUtilities(newUtilities)
        }
    ],
}
