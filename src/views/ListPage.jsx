import React from 'react'
import Head from '../components/Head'
import List from '../components/List'

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

export default function ListPage({ location, list, history }) {
  return (
    <div style={style}>
      <Head location={location.pathname} history={history} />
      <List list={list} />
    </div>
  )
}
