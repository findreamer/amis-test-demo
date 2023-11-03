import React from 'react'
import { Switch, Redirect, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Editor from './Editor'
import Todo from './Todo'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to="/home" exact />
        <Route path="/home" component={Home} />
        <Route path={'/editor'} component={Editor}/>
        <Route path="/todo" component={Todo}/>
      </Switch>
    </Router>
  )
}

export default Root