import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AllUsers = lazy(() => import('../AllUsers/AllUsers'))

const routes = (
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={AllUsers} />
    </Suspense>
  </main>
)

const App = ({ store }) => {
  return (
    <Router store={store}>
        {routes}
    </Router>
  )
}
export default App