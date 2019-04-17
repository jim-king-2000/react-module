import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: [
              ["@babel/transform-runtime"]
            ]
          }
        }
      }
    ]
  },
  externals: [
    /^next(\/.+)?$/,
    'grommet',
    'grommet-theme-dxc'
  ],
  optimization: {
    // minimizer: [new TerserPlugin()]
  }
};