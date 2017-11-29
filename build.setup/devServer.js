import { use, setting } from 'mblock-webpack'

const webpackConf = {
  devServer: {
    historyApiFallback: true,
    port: 'define',
    hot: true,
    stats: { colors: true },
    inline: true
  }
}

const devServer = setting(webpackConf, (options, setup) => {
  const { configuration } = setup
  options.devServer.port = configuration.port
  return options
})

use(devServer)
