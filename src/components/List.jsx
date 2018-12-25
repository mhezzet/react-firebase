import React from 'react'
import MList from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  flexBasis: '80%',
  backgroundColor: 'Brown',
  minHeight: '300px',
  overflow: 'hidden'
}

export default function List({ list }) {
  return (
    <div style={style}>
      {!list ? (
        <CircularProgress />
      ) : (
        <MList>
          {list.map(count => (
            <ListItem key={Math.random()}>
              <Typography
                variant="h5"
                gutterBottom
                style={{ color: '#FFFDD0' }}
              >
                {count}
              </Typography>
            </ListItem>
          ))}
        </MList>
      )}
    </div>
  )
}
