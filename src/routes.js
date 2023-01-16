import Home from './pages/index'
import Launch from './pages/Launch'
import BookDemo from './pages/BookDemo'
import Unite from './pages/Unite'

export const routes = [
  { path: '/', component: Home },
  { path: '/automate', component: Launch },
  { path: '/book-a-demo', component: BookDemo },
  { path: '/unite', component: Unite },
]

export default routes

