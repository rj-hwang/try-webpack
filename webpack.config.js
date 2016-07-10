module.exports = {
	entry: {
		app1: "./src/app1.js",
		app2: "./src/app2.js"
	},
	output: {
		path: './bin',
		filename: '[name].js',
		chunkFilename: "chunk.[id].js", //chunkFilename是非主入口的文件名，默认为 "[id].[filename].js"
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