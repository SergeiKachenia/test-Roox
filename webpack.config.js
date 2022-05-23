const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {

        rules: [{
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
                "style-loader",
                "css-loader",
                'sass-loader'
            ],
        }, {
            test: /\.(jpg|png)$/,
            use: {
                loader: 'url-loader',
            },
        }, {
            test: /\.(woff|woff2|ttf)$/,
            type: 'asset/resource',
        }, {}],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.join(__dirname, './dist'),
        compress: true,
        port: 3000,
        hot: true
    },
};