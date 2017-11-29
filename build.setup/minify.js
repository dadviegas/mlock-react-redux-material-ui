import { use, setting } from 'mblock-webpack'
import { join } from 'path'

const uglifyConf = {
  test: /\.js($|\?)/i,
  sourceMap: true,
  uglifyOptions: {
    compress: { unused: true, dead_code: true }
  }
}

use(setting(uglifyConf, (options, setup) => {
  const { webpack } = setup.modules

  return setup.configuration.isProduction ? {
    plugins: [
      new webpack.optimize.UglifyJsPlugin(options)
    ]
  } : {}
}))
