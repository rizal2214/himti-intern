/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: "#efc5b2",
                primaryGradient: "#ffdccb",
                secondary: "#9e616a",
                navbarColor: "#f2c7b4",
                footerColor: "#f9cdb9",
            },
            fontFamily: {
                nunito: ["Nunito Sans", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
