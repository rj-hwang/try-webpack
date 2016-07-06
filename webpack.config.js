module.exports = {
	entry: "./src/app.js",
	output: {
		//path: './bin',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};