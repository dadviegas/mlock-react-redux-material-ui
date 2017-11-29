import { use, setting } from 'mblock-webpack'
import { join } from 'path'

const sourcePath = join(__dirname, '../src')

const base = {
  devtool: 'none'
}

use(
  setting(base)
)
