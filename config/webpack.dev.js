const path = require('path')
const webpack = require('webpack')

const config = {
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development'
}

module.exports = config
