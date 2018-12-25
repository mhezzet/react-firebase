import React from 'react'
import Counter from '../components/Counter'
import Head from '../components/Head'

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

export default function CounterPage({ location, count, history }) {
  return (
    <div style={style}>
      <Head location={location.pathname} history={history} />
      <Counter count={count} />
    </div>
  )
}
