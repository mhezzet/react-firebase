import { useState, useEffect } from 'react'
import db from '../firebase'

export default function useCounter() {
  const [count, setCount] = useState()

  useEffect(() => {
    const timer = setInterval(() => {
      db.collection('counter')
        .doc('XXBKEZRT5IB4jrdpMBlp')
        .get()
        .then(doc => {
          setCount(doc.data().count)
          db.collection('counter')
            .doc('XXBKEZRT5IB4jrdpMBlp')
            .set({ count: doc.data().count + 1 })
        })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return count
}
