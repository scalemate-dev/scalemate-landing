import Home from './pages/index'
import Launch from './pages/Launch'
import BookDemo from './pages/BookDemo'

export const routes = [
  { path: '/', component: Home },
  { path: '/automate', component: Launch },
  { path: '/book-a-demo', component: BookDemo },
]

export default routes

