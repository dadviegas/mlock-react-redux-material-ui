import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import SharedPage from "./common/Shared";
import {RouteProps} from './helpers/RouteProps'
import siteMap from '../site/map'
import {getComponent} from './pages'

const Routes = (
  <Switch>
    <SharedPage>
      {
        siteMap.map((route) => (
          <RouteProps
            key={route.key}
            path={route.path}
            exact={route.exact}
            component={getComponent(route.type)}
            breadcrumbName={route.breadcrumbName}
            payload={route.payload}
          />
        ))
      }
    </SharedPage>
  </Switch>
)

export default Routes
