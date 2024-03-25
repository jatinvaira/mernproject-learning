const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/App.js', // Specify the entry point
    output: {
      path: path.resolve(__dirname, 'dist'), // Output directory
      filename: 'bundle.js', // Output filename
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // Use babel-loader for JS/JSX files
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Resolve these extensions
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
