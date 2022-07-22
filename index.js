import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './credentials.js'

initializeApp( {
    credential: cert(credentials)
})

const db = getFirestore()

// const car2 = ({ make: 'Ferrari', model: 'GTO', year: 2008, color: 'red'})

// db.collection('cars')
//   .add(car2)
//   .then (doc => {
//     console.log('Doc added:', doc.id)
// })
//   .catch(err => console.error(err))
  //console.log()

db.collection ('cars').doc('lambo')
  .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, color: 'yellow'})