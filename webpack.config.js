require("dotenv").config();
const { name, version, license } = require("./package.json");
const { BannerPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = (env, { mode }) => {
	const is_development = mode === "development";

	return {
		watch: is_development,

		entry: path.resolve(__dirname, "src/entry.ts"),

		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js",
		},

		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},

		module: {
			rules: [
				// Vue files
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					loader: "vue-loader",
				},

				// TypeScript/JavaScript files
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					resolve: {
						extensions: [".tsx", ".ts", ".js", ".jsx"],
					},
				},

				// Stylus/CSS files
				{
					test: /\.(css|styl)$/,
					use: [
						MiniCssExtractPlugin.loader,

						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: is_development
										? "[name]__[local]-[hash:base64:2]"
										: "[hash:base64:4]",
								},
							},
						},

						{
							loader: "postcss-loader",
							options: {
								postcssOptions: {
									plugins: [
										[
											"postcss-preset-env",
											{
												autoprefixer: { grid: true },
											},
										],
									],
								},
							},
						},

						"stylus-loader",
					],
				},
			],
		},

		plugins: [
			// Extract CSS into its own file
			new MiniCssExtractPlugin({
				filename: "bundle.css",
			}),

			new VueLoaderPlugin(),

			// Add a banner with the project name and version
			new BannerPlugin({
				banner: `${name} | ${version} | ${license}`,
				include: ["bundle.js", "bundle.css"],
			}),

			// This plugin will include the webpack produced script and style
			// in the HTML file. It adds a hash to the url, which ensures the
			// client downloads the latest version, in case there is a cached one.
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "src/assets/index.html"),
				hash: true,
				base: is_development ? false : process.env.HTML_BASE || false,
				favicon: path.resolve(__dirname, "src/assets/favicon.png"),
			}),
		],

		...(is_development
			? {}
			: {
					optimization: {
						minimizer: [
							new CssMinimizerPlugin(),

							// As we are using a custom optimization, making use of
							// CssMinimizerPlugin, we also need to specify TerserPlugin
							new TerserPlugin({ extractComments: false }),
						],
					},
			  }),
	};
};
