module.exports = {
  entry: {main: './client/src/js/index.js'},
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js'
  },
  module:{
      rules:[
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
      ]
  },
};
