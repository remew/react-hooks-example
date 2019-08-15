'use strict';
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react',
                [
                  '@babel/env',
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'template/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    host: '0.0.0.0',
  },
};
