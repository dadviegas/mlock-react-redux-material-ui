import { version } from "../../package"

export let debug = false

export const settings = {
  environment: process.env.NODE_ENV,
  version
}

if (process.env.NODE_ENV === 'development') {
  debug = true
  settings.version = `${settings.version} - Dev`
}

if (process.env.NODE_ENV === 'production') {
  settings.version = `${settings.version} - Production`
}
