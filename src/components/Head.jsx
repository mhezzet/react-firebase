import React from 'react'
import Typography from '@material-ui/core/Typography'

const style = {
  container: {
    display: 'flex',
    flexBasis: '20%',
    backgroundColor: '#FFFDD0',
    minHeight: '100px',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  state1: {
    color: 'Brown',
    cursor: 'pointer',
    textAlign: 'center'
  },
  state2: {
    color: '#b7b2b24f',
    cursor: 'pointer',
    textAlign: 'center'
  }
}

export default function Head({ location, history }) {
  function handleClick(token) {
    console.log(token)
    console.log(history)
    history.push(token)
  }
  return (
    <div style={style.container}>
      <Typography
        component="h2"
        variant="h1"
        style={location === '/list' ? style.state2 : style.state1}
        onClick={() => handleClick('/')}
      >
        Counter
      </Typography>

      <Typography
        component="h2"
        variant="h1"
        style={location === '/' ? style.state2 : style.state1}
        onClick={() => handleClick('/list')}
      >
        List
      </Typography>
    </div>
  )
}
