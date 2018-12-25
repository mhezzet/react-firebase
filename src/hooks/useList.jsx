import { useState, useEffect } from 'react'

export default function useList(count) {
  const [list, setLists] = useState([])

  useEffect(
    () => {
      if (!count) return
      setLists([count, ...list])
    },
    [count]
  )

  return list
}
