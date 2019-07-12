const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/NodeRSA.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // string
    libraryTarget: 'umd2',
    filename: 'index.js',
  }
}
