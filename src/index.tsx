import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { routesConfig } from './routerConfig'
import './index.css'

ReactDOM.render(
  <Router>
    {renderRoutes(routesConfig as RouteConfig[])}
  </Router>, document.getElementById('root') as HTMLElement)
