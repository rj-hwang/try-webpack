module.exports = {
	entry: './src/app.js',
	output: {
		path: './bin',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			// {
			// 	test: /\.json$/,
			// 	exclude: /node_modules/,
			// 	loader: 'json-loader',
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	}
};