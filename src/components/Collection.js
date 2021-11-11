import React from 'react'
import Main from './Main'
import Login from './Login'
import { Route, Switch } from 'react-router-dom'

function Collection(){
    return <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
}

export default Collection