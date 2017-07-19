'use strict'

const Webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: [
        './demo/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'demo.js'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'eval-source-map',
    // TODO: Add loader for CSS and do post processing
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dist\/)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        'transform-runtime', 
                        'transform-class-properties'
                    ]
                }
            }
        ]
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                // drop_console: true,
                drop_debugger: true,
            },
            comments: false,
            // console: false,
            mangle: true,
            sourceMap: true,
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new Webpack.optimize.AggressiveMergingPlugin(),
        new Webpack.optimize.OccurrenceOrderPlugin(),
    ]
}
