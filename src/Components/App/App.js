import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoInput from '../TodoInput/TodoInput'
import AllTodos from '../AllTodos/AllTodos'

const routes = (
  <Switch>
    <Route exact path="/" component={TodoInput} />
    <Route exact path="/" component={AllTodos} />
  </Switch>
)

const App = ({ params }) => {
  console.log(params)
  return (
    <Router>
        {routes}
    </Router>
  )
}
export default App