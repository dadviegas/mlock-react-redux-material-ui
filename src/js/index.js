import React from 'react'
import createHistory from 'history/createHashHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import render from 'mblock-react'

import routes from './Routes'
import Root from './Root'
import configureStore from './redux/configureStore'

import '../style/general.scss'

let initialState = {}

const hashHistory = createHistory()
const store = configureStore(initialState, hashHistory)
const history = syncHistoryWithStore(hashHistory, store)

render(() => <Root theme='muiTheme0' history={history} routes={routes} store={store} />, 'root')

if (module.hot) {
  module.hot.accept()
}
