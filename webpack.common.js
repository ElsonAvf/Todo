const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  entry: './src/modules/controller.js',
  plugins: [
    new HtmlWebpackPlugin({
	template: './src/index.html',
    }),
  ],
  output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
