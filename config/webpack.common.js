const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    entry: {
        app: path.resolve('./', 'app', 'index.tsx')
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: './'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts'
        }, {
            test: /\.js$/,
            use: ['source-map'],
            enforce: 'pre'
        }]
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
            title: 'My App'
        })
    ],
    optimization: {
        minimize: true
    }
}

module.exports = config
