const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackDevServer = require('webpack-dev-server')

const node_env = process.env.NODE_ENV
const common_config_path = path.resolve('./', 'config', 'webpack.common.js')
const dev_config_path = path.resolve('./', 'config', 'webpack.dev.js')
const prod_config_path = path.resolve('./', 'config', 'webpack.prod.js')

if (node_env === 'development') {
    const common_config = require(common_config_path)
    const dev_config = require(dev_config_path)

    const config = merge(common_config, dev_config)
    config.entry.app = [config.entry.app]
    config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/')
    const options = {
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        host: 'localhost',
        inline: true,
        port: 8080
    }
    webpackDevServer.addDevServerEntrypoints(config, options)

    const server = new webpackDevServer(webpack(config), options)

    server.listen(8080, 'localhost', () => {
        console.log('dev server listening on port 8080')
    })
}

if (node_env === 'production') {
    const common_config = require(common_config_path)
    const prod_config = require(prod_config_path)

    const config = merge(common_config, prod_config)
}
