module.exports = {
	plugins: ["@babel/plugin-transform-runtime"],

	presets: [
		"@babel/preset-env", // Uses .browserslistrc data
		"@babel/preset-typescript",
	],
};
