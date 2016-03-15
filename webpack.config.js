module.exports = {
    entry: [
        './web/example1/app.js'
    ],
    output: {
        path: __dirname,
        filename: "./web/example1/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};