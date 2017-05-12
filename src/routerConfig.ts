import Layout, { About, Dashboard } from './App'
import Timer from './Timer'

export const routesConfig = [
    {
        path: '/',
        component: Layout,
        indexRoute: {
            component: Timer
        },
        routes: [
            {
                path: '/dashboard',
                component: Dashboard
            }, {
                path: '/about',
                component: About
            }, {
                path: '/timer',
                component: Timer
            }
        ]
    }
]