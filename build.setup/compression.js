import { use, setting } from 'mblock-webpack'
import { join } from 'path'
var path = require("path")

const compressionConf = {
  asset: '[path].gz[query]'
}

use(
  setting(compressionConf, (options, setup) => {
    const { configuration } = setup

    return configuration.isDevelopment
      ? {}
      : {
          plugins: [
            new setup.plugins.CompressionPlugin(options)
          ]
        }
  })
)




