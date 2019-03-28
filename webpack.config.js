const path = require("path")
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin")

const src = path.resolve(__dirname, "src")
const dist = path.resolve(__dirname, "dist")

module.exports = {
	mode: "development",
	entry: src + "/index.js",
	output: {
		path: dist,
		filename: "bundle.js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".js", ".vue"]
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		}, {
			test: /\.vue$/,
			loader: "vue-loader"
		}]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: "dist",
        open: true
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: src + "/template.html",
			filename: "index.html"
		})
	]
}
