import { use, setting } from 'mblock-webpack'
import { join } from 'path'

const webpackConf = {
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: ['node_modules'],
      include: '__define__',
      loader: 'babel-loader'
    }]
  }
}

use(
  setting(webpackConf, (options, setup) => {
    options.module.rules[0].include = setup.configuration.sourcePath
    return options
  })
)
