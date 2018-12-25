import React from 'react'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexBasis: '80%',
  backgroundColor: 'Brown',
  minHeight: '300px'
}

export default function Counter({ count }) {
  return (
    <div style={style}>
      {count ? (
        <Typography
          component="h2"
          variant="h1"
          gutterBottom
          style={{ color: '#FFFDD0', fontSize: '13rem' }}
        >
          {count}
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}
