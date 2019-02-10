var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
    // rules: [
    //   {
    //     test : /\.jsx?/,
    //     include : SRC_DIR,
    //     loader : 'babel-loader',      
    //     query: {
    //       presets: ['react', 'es2015']
    //     }
    //   },
    //   {
    //     test: /\.css$/,
    //     include : SRC_DIR,
    //     loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
    //   }

    // ]
    // loaders: [
    //   {
    //     test : /\.jsx?/,
    //     include : SRC_DIR,
    //     loader : 'babel-loader',      
    //     query: {
    //       presets: ['react', 'es2015']
    //     }
    //   }, {
    //     test: /\.css$/,
    //     loader: 'style-loader'
    //   }, {
    //     test: /\.css$/,
    //     loader: 'css-loader',
    //     query: {
    //       modules: true,
    //       localIdentName: '[name]__[local]___[hash:base64:5]'
    //     }
    //   }
    // ]
  }
};