module.exports = {
	entry: './src/app.js',	// required './'
	output: {
		path: './bin',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				//exclude: /node_modules/,

				// set to 'json-loader' or 'json'
				loader: 'json'
			}
		]
	}
};