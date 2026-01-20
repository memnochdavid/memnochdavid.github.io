/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    pattern: /(border|text|bg|hover:bg|ring|hover:border)-(.+)-(\d{2,3})/

}