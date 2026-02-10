module.exports = {
  content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue'
	],
	// The rest of your code, if you have any
  theme: {
    fontFamily: {
      display: "Source Code Pro",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
