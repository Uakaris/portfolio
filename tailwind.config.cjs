// tailwind.config.js
module.exports = {
    content: ["./index.html", "./src/**/*.{jsx,js}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                bounce: "bounce 3s ease-in-out infinite",
                "fade-in-blur": "fadeInBlur 1s ease-out",
            },
            keyframes: {
                bounce: {
                    "0%, 20%, 50%, 80%, 100%": {
                        transform: "translateY(-30%)",
                    },
                    "40%": {
                        transform: "translateY(0)",
                    },
                    "60%": {
                        transform: "translateY(-15%)",
                    },
                },
                fadeInBlur: {
                    "0%": { opacity: "0", filter: "blur(10px)" },
                    "100%": { opacity: "1", filter: "blur(0)" },
                },
            },
            fontFamily: {
                inter: ["poppins", "serif"],
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".transition-all": {
                    transition: "all 0.5s ease-in-out",
                },
            });
        },
    ],
};
