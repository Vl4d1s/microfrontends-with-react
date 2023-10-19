module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // only run babel on js files
        exclude: /node_modules/, // don't run babel on node_modules
        use: {
          loader: "babel-loader", // use babel-loader
          options: {
            presets: [
              // use these presets (more on presets below)
              "@babel/preset-react", // convert jsx into js
              "@babel/preset-env", // use modern js
            ],
            plugins: [
              // use these plugins (more on plugins below)
              "@babel/plugin-transform-runtime", // async/await
            ],
          },
        },
      },
    ],
  },
};
