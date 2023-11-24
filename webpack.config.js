const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

let config = {
    mode: 'development',
    context: path.join(__dirname, '/src'),
    entry: 'index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', 'jsx'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: {}},
                    { loader: 'css-loader', options: { url: true, import: true}}
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
            title: 'Простое приложение',
            base: '/'
        })
    ]
}

// if (process.env.NODE_ENV === 'development') {
//     config.devtool = 'inline-source-map';
//     config.devServer = {
//         static: path.join(__dirname, 'dist'),
//         port: 8010,
//         historyApiFallback: true
//     };
// }

module.exports = config;