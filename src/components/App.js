import React, { Fragment } from 'react'

import Header from './Header/Header'
import List from './List/List'
import CurrencyDetail from './CurrencyDetail/CurrencyDetail'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path='/' component={List} exact />
            <Route path='/currency/:id' component={CurrencyDetail} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
}

const NotFound = () => 
<div 
style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center'}}>
  <h1>Page not found</h1>
  <p>Return to <Link to='/'>home</Link> page</p>
</div>

export default App