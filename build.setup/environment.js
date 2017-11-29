import { use, setting } from 'mblock-webpack'
import { join } from 'path'
var path = require("path")

const provideConf = {
  '__environment__': path.resolve(__dirname, '../src/environment')
}

use(setting(provideConf, (options, setup) => {
  const { isDevelopment } = setup.configuration.isDevelopment
  const { webpack, resolvePath } = setup.modules

  const pluginsList = [
    new webpack.NoEmitOnErrorsPlugin(),
    new setup.plugins.CaseSensitivePlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
      VERSION: require(resolvePath('package.json')).version,
      ...options
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5, // Must be greater than or equal to one
      minChunkSize: 1000
    })
  ]

  if (isDevelopment) {
    pluginsList.push(new webpack.optimize.ModuleConcatenationPlugin())
    pluginsList.push(new webpack.NamedModulesPlugin())
  }

  return {
    plugins: pluginsList
  }
}))
