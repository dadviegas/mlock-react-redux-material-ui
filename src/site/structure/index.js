import { route } from '../../js/route'
import { home } from './home'
import { es6Module } from './es6.module'

export const routes = [
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
  }),
  home,
  es6Module
]
