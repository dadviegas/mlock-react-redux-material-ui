import "./build.setup"
import { build } from 'mblock-webpack'
import { join } from 'path'

const appFolder = (folder) => join(__dirname, folder)

// function to be called when webpack is called
// we can pass variables from the command
export default (env = {source: 'src', output: 'dist'}) => {
  // on the plugins will be available on setup.configuration
  // example: setup.configuration.outputPath
  const environment = {
    sourcePath: appFolder(env.source),
    outputPath: appFolder(env.output),
    port: process.env.NODE_ENV === 'development' ? 5000 : 8080,
    ...env
  }

  // Generate webpack configuration based on partials
  return build(environment)
}
