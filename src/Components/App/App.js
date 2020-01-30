import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserSettings from '../UserSettings/UserSettings'
import Header from '../Header/Header'

import './App.css'

const AllUsers = lazy(() => import('../AllUsers/AllUsers'))

const routes = (
  <React.Fragment>
    <header>
      <Route path="/" component={Header} />
      <Route exact path="/" component={UserSettings} />
    </header>
    <main>
      <Suspense fallback={<div>Loading Users...</div>}>
        <Route exact path="/" component={AllUsers} />
      </Suspense>
    </main>
  </React.Fragment>
)

const App = ({ store }) => {
  return (
    <Router store={store}>
        {routes}
    </Router>
  )
}
export default App