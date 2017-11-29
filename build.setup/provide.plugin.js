import { use, setting } from 'mblock-webpack'
import { join } from 'path'
var path = require("path")

const provideConf = {
  '__environment__': path.resolve(__dirname, '../src/environment')
}

use(setting(provideConf, (options, setup) => {
  const { webpack } = setup.modules

  return {
    plugins: [
      new webpack.ProvidePlugin(options)
    ]
  }
}))




