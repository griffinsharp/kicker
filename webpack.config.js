const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/kicker.jsx', //entry point -- output path is below under output/path
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), 
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'source-map'
};