import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import Error from './Error'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movies/:id'>
          <Movie />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
}

export default App
 