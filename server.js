var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var Config = require('./webpack.config');

new WebpackDevServer(webpack(Config),
	{
		publicPath: Config.output.publicPath,
		hot: true,
		historyApiFallback: true,
		stats: {
			colors: true
		}
	}
).listen(3000, 'localhost', function (error) {
	if (error) {
		console.log(error);
	}

	console.log('Listening at localhost:3000');
})