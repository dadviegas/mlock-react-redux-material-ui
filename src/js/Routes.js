import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import SharedPage from "./common/Shared";
import {RouteProps} from './helpers/RouteProps'
import siteMap from '../site/map'
import {getComponent} from './component.type'
import { route } from './route';

const routeBuilder = (routes, route) => {
  routes.push(<RouteProps
    key={route.key}
    path={route.path}
    exact={route.exact}
    component={getComponent(route.type)}
    breadcrumbName={route.breadcrumbName}
    payload={route.payload}
    nested={route.nested}
  />)

  if (route.nested) {
    route.nested.map((nested) => {
      routes.push(<RouteProps
        key={nested.key}
        path={nested.path}
        exact={nested.exact}
        component={getComponent(nested.type)}
        breadcrumbName={nested.breadcrumbName}
        payload={nested.payload}
        nested={nested.nested}
      />)
    })
  }
}

const generateRoutes = (siteMap) => {
  const routes = []

  siteMap.map((route) => {
    routeBuilder(routes, route)
  })

  return routes
}

const Routes = (
  <Switch>
    <SharedPage>
      {generateRoutes(siteMap)}
    </SharedPage>
  </Switch>
)

export default Routes
