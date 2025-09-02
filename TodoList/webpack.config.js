const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main JS entry
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // optional: cleans dist folder each build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // add other loaders if needed
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Must exactly match your file path
    }),
  ],
  mode: 'development', // or 'production'
  devServer: {
    static: './dist', // serve your dist folder during dev
    open: true,
  },
};
