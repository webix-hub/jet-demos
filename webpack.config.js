var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {

	var pack = require("./package.json");
	var babelSettings = {
		extends: path.join(__dirname, '/.babelrc')
	};

	var config = {
		entry: {
			"plugins-theme" : "./sources/plugins-theme.js",
			"plugins-locale" : "./sources/plugins-locale.js",
			"plugins-status" : "./sources/plugins-status.js",
			"routers-url" : "./sources/routers-url.js",
			"guards" : "./sources/guards.js",
			"windows" : "./sources/windows.js"
		},
		output: {
			path: path.join(__dirname, "codebase"),
			publicPath:"/codebase/",
			filename: "[name].js"
		},
		devtool: "inline-source-map",
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader?" + JSON.stringify(babelSettings)
				}
			]
		},
		resolve: {
			extensions: [".js"],
			modules: ["./sources", "node_modules"],
			alias:{
				"jet-views":path.resolve(__dirname, "sources/views"),
				"jet-locales":path.resolve(__dirname, "sources/locales")
			}
		},
		//next config is used only by router-url sample
		devServer:{
			historyApiFallback:{
				index : "routers-url.html"
			}
		}
	};

	return config;
}