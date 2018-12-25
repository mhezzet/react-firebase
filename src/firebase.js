import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCy2TV9y8RpgBpLKxqbOBFZzWKSTef6Vbo',
  authDomain: 'counter-175f6.firebaseapp.com',
  databaseURL: 'https://counter-175f6.firebaseio.com',
  projectId: 'counter-175f6',
  storageBucket: 'counter-175f6.appspot.com',
  messagingSenderId: '473846423949'
})

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export default db
