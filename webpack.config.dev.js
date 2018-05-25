import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: () => [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src')
  },
  plugins: [
    new ExtractTextPlugin('app.bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack. NoEmitOnErrorsPlugin()

  ],
  module: {
    loaders: [
      {test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      },
      {test: /(\.(s*)css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  }
};
