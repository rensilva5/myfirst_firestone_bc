import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './credentials.js'

initializeApp( {
    credential: cert(credentials)
})

const db = getFirestore()

// const car3 = ({ make: 'Audi', model: 'A3', year: 2018, color: 'grey'})

// db.collection('cars')
//   .add(car3)
//   .then (doc => {
//     console.log('Doc added:', doc.id)
// })
//   .catch(err => console.error(err))
//   console.log()

// db.collection ('cars').doc('lambo')
//   .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, color: 'yellow'})

// db.collection('cars').doc('lambo')
//   .update({ ac: "yes", color: 'hot pink' })

//Get a single document:
// db.collection('cars').doc('lambo').get()
//   .then(doc => {
//     console.log(doc.id)
//     console.log(doc.data())
//   })
//   .catch(console.log.error)

// Get a whole collection:
db.collection('cars').get()
  .then(collection => {
    collection.docs.forEach(doc => console.log(doc.id, doc.data()))
  })
  .catch(console.error)

  //Querry docs from collection:
  db.collection('cars')
    .where('year', '>=', 2015)
    .get()
      .then(collection => {
        const cars = collection.docs.map(doc => {
            let car = doc.data() // {make, model, color, year}
            car.id = doc.id      // {make, model, color, year, id}
            return car
        })
        console.log(cars)
      })
      .catch(console.error)
