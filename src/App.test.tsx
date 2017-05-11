import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { routesConfig } from './routerConfig'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router>
    {renderRoutes(routesConfig as RouteConfig[])}
  </Router>, div)
})
