import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './credentials.js'

initializeApp( {
    credential: cert(credentials)
})

const db = getFirestore()

const car = { make: 'Ferrari', model: 'GTO', year: 2008, color: 'red'}

db.collection('car').add(car)
.then() doc => {
    console.log('Doc added: ' doc.id)
}
.catch(err => console.error(err))
console.log()