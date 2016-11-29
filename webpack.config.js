var json = require("json-loader");

module.exports = {
  entry: './assets/javascript/popup.js',
  output: {
    path: './assets/javascript',
    filename: 'chordParser.js',
  },
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', 'index.json' ]
  }
};
