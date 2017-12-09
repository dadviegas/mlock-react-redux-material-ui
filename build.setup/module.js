import { use, setting } from 'mblock-webpack'

use(
  setting({}, () => {
    const rules = [
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.md$/,
        use: 'html-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]

    return {
      module: {
        rules
      }
    }
  })
)
