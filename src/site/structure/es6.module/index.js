import { route } from "../../../js/route"

const es6ModuleOne = route({
  icon: 'es6ModuleOne',
  name: 'ES6 - Module One',
  description: 'ES6 - Module One',
  path: '/es6/module-one',
  payload: {
    markdownFile: 'default.md'
  }
})

export const es6Module = route({
  icon: 'es6',
  name: 'ES6',
  description: 'ES6',
  path: '/es6',
  payload: {
    markdownFile: 'default.md'
  },
  nested: [
    es6ModuleOne
  ]
})
