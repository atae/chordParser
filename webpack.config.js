var json = require("json-loader");

module.exports = {
  entry: './assets/parser.js',
  output: {
    path: './assets',
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
