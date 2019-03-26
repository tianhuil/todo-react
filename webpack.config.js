const webpack               = require('webpack'),
      HtmlWebpackPlugin     = require('html-webpack-plugin'),
      MiniCssExtractPlugin  = require("mini-css-extract-plugin"),
      BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      Visualizer            = require('webpack-visualizer-plugin');


module.exports = (env, argv) => {
  var devMode = false
  if (argv.mode ==='development') {
    devMode = true;
    console.log("###### Mode: Dev")
  } else if (argv.mode === 'production') {
    console.log("###### Mode: Prod")
  } else {
    console.error("###### Could not recognize Mode")
    process.exit(1)
  }

  return {
    entry: ['./src/index.tsx', './src/styles/index.scss'],
    mode: devMode ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }, {
          test:/\.(s*)css$/,
          use: [
            devMode ?'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }, {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader?limit=100000',
            options: {}
          }
        }
      ]
    },
    optimization: {
      minimize: (devMode ? undefined : true)
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/todo-react/dist/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
    },
    // If too slow, try eval
    devtool: devMode ? 'cheap-eval-source-map' : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new Visualizer({
        filename: './statistics.html'
      }),
      new BundleAnalyzerPlugin({
        analyzerPort: 8082,
      }),
    ]
  }
}
