import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
            lexend: ["Lexend", "sans-serif"],
            varela: ["Varela", "sans-serif"],
            verdana: ["Verdana", "Geneva", "sans-serif"],
            arial: ["Arial", "sans-serif"],
        },
        screens: {
            sm: "426px",
            md: "768px",
            lg: "991px",
            xlg:"1200px"
        },
        keyframes: {
            'blur-in': {
                '0%': { filter: 'blur(10px)' },
                '100%': { filter: 'blur(0)' }
            },
            float: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-15px)' },
              },
        },
        animation: {
            'blur-in': 'blur-in 0.5s ease-out forwards',
            float: 'float 6s ease-in-out infinite',
        },
        
         
    },
    plugins: [],
};
export default config;
