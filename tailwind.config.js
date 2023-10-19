/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        fontFamily: {
            sans: "Onest",
        },
        extend: {
            colors: {
                black: "#272727",
                "light-gray": "#F8F8F8",
                gray: "#9C9C9C",
                "darker-grey": "#9f9f9f",
                "orange-accent": "#FFA011",
            },
            boxShadow: {
                banner: "5px 5px 25px 0px rgba(121, 121, 121, 0.15);",
            },
        },
    },
    plugins: [],
}
