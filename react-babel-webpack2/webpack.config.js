var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
		rules: [
		  {
			  test: /.jsx?$/,
			  exclude: /node_modules/,
			  include: path.join(__dirname, 'src'),
			  use: [
				{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						presets: [
						  ['es2015', { modules: false }],
						  'react',
						],
					}
				}
			  ]
		  },
		  {
			  test: /\.(css|scss|sass)$/,
			  loader: 'style-loader!css-loader!sass-loader',
		  },
		]
	}
};
