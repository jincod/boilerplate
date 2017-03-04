module.exports = false && process.env.NODE_ENV === 'production' ?
	require('./src/webpack/webpack.config.prod') :
	require('./src/webpack/webpack.config.dev');
