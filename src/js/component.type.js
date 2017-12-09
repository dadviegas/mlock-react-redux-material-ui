
import Markdown from './views/Markdown'
import NotFound from './views/NotFound'

export const componentTypes = {
  Markdown: 'Markdown',
  NotFound: 'NotFound'
}

const componentMap = {
  [componentTypes.Markdown]: Markdown,
  [componentTypes.NotFound]: NotFound
}

export const getComponent = (type) => {
  const component = componentMap[type]
  return component || componentMap[componentTypes.NotFound]
}
