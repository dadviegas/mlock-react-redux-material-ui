import { use, setting } from 'mblock-webpack'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'


use(setting({}, (options, setup) => {
  const { resolvePath } = setup.modules

  return {
    plugins: [
      new FaviconsWebpackPlugin({
        // Your source logo
        logo: resolvePath('./src/assets/favicon.jpg'),
        // The prefix for all image files (might be a folder or a name)
        prefix: 'icons-[hash]/',
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#fff',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'Webpack App',

        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })
    ]
  }
}))
