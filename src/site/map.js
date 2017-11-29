export const componentTypes = {
  Markdown: 'Markdown',
  NotFound: 'NotFound'
}

const route = (options) => ({
  icon: '',
  name: '',
  path: 'to_define',
  exact: true,
  type: componentTypes.Markdown,
  key: options.path.replace(/\//g, '_') + '_key',
  description: options.description ? options.description : options.name,
  payload: {},
  ...options
})

export default [
  route({
    icon: 'home',
    name: 'Default',
    description: 'Default',
    path: '/',
    payload: {
      markdownFile: 'default.md'
    }
  }),
  route({
    icon: 'home',
    name: 'Home',
    description: 'Home',
    path: '/home',
    payload: {
      markdownFile: 'markdowntest.md'
    }
  }),
  route({
    icon: 'code',
    name: 'About',
    description: 'About',
    path: '/about',
    payload: {
      markdownFile: 'markdowntest.1.md'
    }
  }),
  route({
    icon: 'code',
    name: 'Code',
    description: 'Code',
    path: '/code/default',
    payload: {
      markdownFile: 'code/default.md'
    }
  })
]
