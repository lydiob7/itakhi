import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem"
        },
        extend: {
            animation: {
                marquee: "marquee 30s forwards linear infinite",
                "marquee-slow": "marquee 40s forwards linear infinite",
                "marquee-reverse": "marquee 30s reverse linear infinite",
                "marquee-reverse-slow": "marquee 40s reverse linear infinite"
            },
            borderWidth: {
                1: "1px"
            },
            colors: {
                wine: "#6C2636",
                lile: "#DFB9F9",
                lemon: "#E0FB00",
                white: "#FFFFFF",
                oldWhite: "#F9FFFB",
                gray: "#E5EAE7",
                black: "#171717",
                lightBlack: "#2C2C2C"
            },
            keyframes: {
                marquee: {
                    to: {
                        transform: "translateX(calc(-50% - .5rem))"
                    }
                }
            }
        },
        fontFamily: {
            inter: ["var(--font-inter)"],
            anton: ["var(--font-anton)"]
        },
        fontSize: {
            xs: ["0.75rem", "0.875rem"],
            sm: ["0.875rem", "1.5rem"],
            base: "1rem",
            xl: ["1.125rem", "1.875rem"],
            "2xl": ["1.25rem", "2rem"],
            15: ["1.5rem", "2rem"],
            "3xl": ["2rem", "2.5rem"],
            "4xl": ["2.25rem", "3rem"],
            25: ["2.5rem", "3rem"],
            "5xl": ["3rem", "3.5rem"],
            "6xl": ["3.5rem", "4rem"],
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        }
    },
    plugins: []
};
export default config;
