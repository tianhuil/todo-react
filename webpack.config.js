const webpack           = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.(css|scss)$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
  })]
};

module.exports = (env, argv) => {
  if (argv.mode ==='development') {
    config.mode = 'development';
    // If too slow, try eval
    config.devtool = 'cheap-eval-source-map';
  }

  if (argv.mode === 'production') {
    config.mode = 'production';
    config.devtool == undefined;
  }

  return config;
}
