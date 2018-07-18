// webpack.config.js

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        //path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 4000
    }
};