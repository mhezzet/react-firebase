import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CounterPage from './views/CounterPage'
import ListPage from './views/ListPage'
import NotFound from './views/NotFound'
import useCounter from './hooks/useCounter'
import useList from './hooks/useList'

export default function App() {
  const count = useCounter()
  const list = useList(count)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={props => <CounterPage {...props} count={count} />}/>
        <Route exact path="/list" component={props => <ListPage {...props} list={list} />}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
