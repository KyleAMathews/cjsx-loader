[coffee-react-transform](https://github.com/jsdf/coffee-react-transform) loader module for [Webpack](http://webpack.github.io/).

## Install
`npm install cjsx-loader`

## Usage

Here's a simple `webpack.config.js` file that you could use. For a more
sophisticated/complete example, see my [coffee-react-quickstart
project](https://github.com/KyleAMathews/coffee-react-quickstart).

```javascript
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    './src/scripts/router'
  ],
  devtool: "eval",
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  module: {
    loaders: [
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  }
};
```
