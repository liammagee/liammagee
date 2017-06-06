var webpack = require('webpack');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = {
    entry: "./js/entry.js",
    output: {
        path: __dirname + "/app",
        filename: "./js/bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          },
          {
            test: /\.html$/,
            loader: "file-loader?name=index.html&context=./app/static"
          },
          {
            test: /\.png$/,
            loader: "file-loader?name=[name].[ext]&publicPath=images/&outputPath=images/"
          },
          {
            test: /sketch\.js$/,
            loader: "file-loader?name=js/sketch.js&context=./app/static"
          },
          { test: require.resolve('jquery'), loader: 'expose-loader?jQuery!expose-loader?$' }

        ]
    },
    plugins: [
      new ZipPlugin({
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      })
    ]
};
