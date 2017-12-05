import { componentTypes } from "./component.type"

export const route = (options) => ({
  icon: '',
  name: '',
  path: 'to_define',
  exact: true,
  type: componentTypes.Markdown,
  key: options.path.replace(/\//g, '_') + '_key',
  description: options.description ? options.description : options.name,
  payload: {},
  nested: [],
  ...options
})
