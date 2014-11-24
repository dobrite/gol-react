module.exports = {
  entry: "./src/gol.js",
    output: {
        path: __dirname,
        filename: "./js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: "es6-loader!jsx-loader?harmony" }
        ]
    }
};
