import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllUsers from '../AllUsers/AllUsers'

const routes = (
  <main>
    <Route exact path="/" component={AllUsers} />
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