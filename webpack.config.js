module.exports = {
	entry: "./src/app.js",
	output: {
		path: './bin',
		filename: 'bundle.js',
		chunkFilename: "m/bundle.[name].js", //chunkFilename是非主入口的文件名，默认为 "[id].[filename].js"
		publicPath: './bin/'
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
				//exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};