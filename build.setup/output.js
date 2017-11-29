import { use, setting } from 'mblock-webpack'

const webpackConf = {
  output: {
    path: '__define__',
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/'
  }
}

const output = setting(webpackConf, (options, setup) => {
  options.output.path = setup.configuration.outputPath
  return options
})

use(output)
