/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    plugins: [require("flowbite/plugin")],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: "Onest",
        },
        extend: {
            colors: {
                // flowbite-svelte
                primary: {
                    50: "#FFF5F2",
                    100: "#FFF1EE",
                    200: "#FFE4DE",
                    300: "#FFD5CC",
                    400: "#FFBCAD",
                    500: "#FE795D",
                    600: "#EF562F",
                    700: "#EB4F27",
                    800: "#CC4522",
                    900: "#A5371B",
                },

                black: "#272727",
                "light-gray": "#F8F8F8",
                gray: "#9C9C9C",
                "darker-grey": "#9f9f9f",
                "orange-accent": "#FFA011",
                red: "#FF5A5A",
            },
            boxShadow: {
                banner: "5px 5px 25px 0px rgba(121, 121, 121, 0.15);",
            },
        },
    },
}
