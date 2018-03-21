var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {

	var pack = require("./package.json");
	var babelSettings = {
		extends: path.join(__dirname, '/.babelrc')
	};

	var config = {
		entry: {
			"app" : "./sources/app.js"
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
				"webix-jet":path.resolve(__dirname, "../webix-jet/dist/"),
				"jet-views":path.resolve(__dirname, "sources/views"),
				"jet-locales":path.resolve(__dirname, "sources/locales")
			}
		},
		//next config is used only by router-url sample
		devServer:{
			historyApiFallback:{
				index : "index.html"
			}
		}
	};

	return config;
}