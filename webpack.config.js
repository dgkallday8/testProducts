const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DEVELOPER = true

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    mode: 'development',
    target: ['browserslist', 'es5'],
    devtool: DEVELOPER ? 'source-map' : false,
        devServer: {
            port: 3000,
            compress: !DEVELOPER,
            hot: DEVELOPER,
            open: DEVELOPER,
            watchContentBase: DEVELOPER
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/misc'),
                    to: path.resolve(__dirname, 'docs/misc')
                },
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'docs')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test:  /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env"
                    ]

                }
            },
        ]
    }
}