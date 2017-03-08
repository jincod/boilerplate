module.exports = false && process.env.NODE_ENV === 'production' ?
	require('./src/client/webpack/webpack.config.prod') :
	require('./src/client/webpack/webpack.config.dev');
