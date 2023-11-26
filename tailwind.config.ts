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
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                md: "2rem",
                lg: "2rem",
                xl: "3rem"
            },
            screens: {
                DEFAULT: "100%",
                sm: "768px",
                md: "1024px",
                lg: "1200px",
                xl: "1440px"
            }
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
                "forest-green": "#16280E",
                "lime-green": "#B4E55E",
                "pale-lime": "#DAF0A1",
                "steel-blue": "#134364",
                "golden-yellow": "#FFC107",
                "coral-red": "#FF6B6B",
                "light-ivory": "#EFEFE2",
                white: "#FFFFFF",
                black: "#000000",
                oldWhite: "#F9FFFB",
                grey: "#E5EAE7",
                lightBlack: "#2C2C2C"
            },
            fontSize: {
                "100": ["100px", "102px"],
                "80": ["80px", "82px"],
                "60": ["60px", "62px"],
                "52": ["52px", "56px"],
                "44": ["44px", "48px"],
                "40": ["40px", "48px"],
                "36": ["36px", "44px"],
                "32": ["32px", "40px"],
                "28": ["28px", "36px"],
                "24": ["24px", "32px"],
                "20": ["20px", "28px"],
                "18": ["18px", "24px"],
                "16": ["16px", "24px"],
                "14": ["14px", "20px"],
                "12": ["12px", "20px"]
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
            overpass: ["var(--font-overpass)"],
            "overpass-mono": ["var(--font-overpass-mono)"],
            syne: ["var(--font-syne)"]
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
