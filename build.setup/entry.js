import { use, setting } from 'mblock-webpack'

const webpackConf = {
  entry: {
    index: ['./index']
  }
}

use(
  setting(webpackConf, (options, setup) => {
    options.context = setup.configuration.sourcePath

    const hotReloadModules = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${setup.configuration.port}`,
      ...options.entry.index
    ]

    options.entry.index = setup.configuration.isDevelopment ? hotReloadModules : options.entry.index
    return options
  })
)
