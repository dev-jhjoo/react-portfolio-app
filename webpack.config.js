const webpack = require('webpack');
const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    // 개발환경
    mode: 'none',

    // 시작경로
    entry: './src/index.js',

    // 번들정보
    output: {
        path: path.join( __dirname, '/dist' ),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules)|(dist)/,
                use: { 
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    } 
                },
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' },
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.(svg|png|jpg|jpeg)$/,
                use: [{
                    loader: 'file-loader'
                }],
            }
        ],
    },
    resolve: { 
        extensions: [ '*', '.js', '.jsx', '.ts', '.tsx' ] 
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ],
    devServer: {
        host:'localhost',
        port: 3001,
        open: true
    },
};