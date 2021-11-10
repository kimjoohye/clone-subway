import React from 'react'
import Main from './Main'
import { Route, Switch } from 'react-router-dom'

function Collection(){
    return <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
}

export default Collection