import Markdown from './views/Markdown'
import NotFound from './views/NotFound'
import { componentTypes } from '../site/map'

const Unknown = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>

const componentMap = {
  [componentTypes.Markdown]: Markdown,
  [componentTypes.NotFound]: NotFound
}

export const getComponent = (type) => {
  const component = componentMap[type]
  return component ? component : componentMap[componentTypes.NotFound]
}
