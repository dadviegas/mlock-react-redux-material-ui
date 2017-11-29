import { use, setting } from 'mblock-webpack'
import { join } from 'path'

const htmlTemplatePath = join(process.cwd(), 'src', 'assets', 'index.ejs')

const htmlOptions = {
  title: 'dadviegas.github.io',
  template: htmlTemplatePath
}

const htmlPage = (htmlOptions) => setting(htmlOptions, (options, setup) => {
  const isProduction = setup.configuration.isProduction
  const { plugins } = setup

  const webpackConf = {
    plugins: []
  }

  const plugin = new plugins.HtmlWebpackPlugin({
    minify: {
      collapseWhitespace: isProduction,
      removeComments: isProduction,
      removeRedundantAttributes: isProduction,
      removeScriptTypeAttributes: isProduction,
      removeStyleLinkTypeAttributes: isProduction
    },
    production: setup.configuration.isProduction,
    inject: true,
    ...options
  })

  webpackConf.plugins.push(plugin)

  return webpackConf
})

use(htmlPage(htmlOptions))
