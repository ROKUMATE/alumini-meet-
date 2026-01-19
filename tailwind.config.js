/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBlue: "#040268",
            },
            animation: {
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                shimmer: {
                    from: {
                        "backgroundPosition": "0 0"
                    },
                    to: {
                        "backgroundPosition": "-200% 0"
                    }
                }
            }
        },
    },
    plugins: [],
};
