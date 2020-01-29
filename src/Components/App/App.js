import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserSettings from '../UserSettings/UserSettings'

const AllUsers = lazy(() => import('../AllUsers/AllUsers'))

const routes = (
  <main>
    <Route exact path="/" component={() => <UserSettings />} />
    <Suspense fallback={<div>Loading Users...</div>}>
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