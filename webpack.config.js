const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    entry: path.resolve(__dirname, 'app', 'index.tsx'),
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: './'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }, {
            test: /\.js$/,
            use: ['source-map-loader'],
            enforce: 'pre'
        }]
    },
    mode: process.env.NODE_ENV || 'development',
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'index.html'),
            title: 'My App'
        })
    ]
}

module.exports = config
