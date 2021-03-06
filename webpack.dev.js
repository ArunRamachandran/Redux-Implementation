const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: { 
        index: './src/main.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
    },
    {
        test: /\.scss|css$/,
        use: [
        'style-loader',
        'css-loader',
        'sass-loader'
        ]
    },
    {
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
                publicPath: '/'
            }
        }
    ]
    }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        historyApiFallback: true,
        port: 4200,
        stats: "errors-only",
        open: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
