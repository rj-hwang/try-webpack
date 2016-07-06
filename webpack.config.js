var webpack = require("webpack");
module.exports = {
	entry: {
		app: "./src/app.js",
		vendor: ["./src/cats.js", "./src/cats.json"],
	},
	output: {
		filename: "./bin/bundle.js"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./bin/vendor.bundle.js")
	]
};