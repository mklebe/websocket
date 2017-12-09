const path = require('path');

module.exports = {
    entry: './client/src/websocket.js',
    output: {
        path: path.resolve(__dirname, 'client'),
        filename: './websocket.build.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}