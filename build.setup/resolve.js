import { use, setting } from 'mblock-webpack'

const webpackConf = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.json'],
    // mainFields: ['web', 'browser', 'module', 'jsnext:main', 'style', 'main']
  }
}

const resolveConf = setting(webpackConf, (options, setup) => options)

use(resolveConf)
