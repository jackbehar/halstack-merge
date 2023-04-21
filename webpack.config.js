const path = require('path');

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              encoding: "base64",
            },
          },
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};

module.exports = config;