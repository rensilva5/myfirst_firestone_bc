import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './credentials.js'

initializeApp( { credential: cert(credentials) })

const db = getFirestore()

//--// Adding one Car (car4)

// const car4 =({ make: 'mercedez', model: 'i34', year: 2008, color: 'blue'})
// db.collection('cars')
//     .add(car4)
//     .then(doc => {
//     console.log('doc added:', doc.id)
//     })
//     .catch(err => console.error(err))
//       console.log()

// //--// Adding another car (car5)

// const car5 = ({ make: 'chevy', model: 'cruze', year: 2017, color: 'silver'})
// db.collection('cars')
//     .add(car5)
//     .then(doc => console.log('one more doc added', doc.id))
//     .catch(err => console.error(err))
//     console.log()

//--// car has been added (car3)

// const car3 = ({ make: 'Audi', model: 'A3', year: 2018, color: 'grey'})
// db.collection('cars')
//   .add(car3)
//   .then (doc => {
//     console.log('Doc added:', doc.id)
// })
//   .catch(err => console.error(err))
//   console.log()

//--// making changes in one of the cars

// db.collection ('cars').doc('lambo')
//   .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, color: 'yellow'})

//--// Another car added

// db.collection('cars').doc('Pirlo')
//   .set({ make: 'ferrari', model: 'ultimate', year: 2020})

// db.collection('cars').doc('lambo')
//   .update({ ac: "yes", color: 'hot pink' })

//--// Getting a single document:

// db.collection('cars').doc('lambo').get()
//   .then(doc => {
//     console.log(doc.id)
//     console.log(doc.data())
//   })
//   .catch(console.log.error)

// Get a whole collection:

// db.collection('cars').get()
//   .then(collection => {
//     collection.docs.forEach(doc => console.log(doc.id, doc.data()))
//   })
//   .catch(console.error)

  db.collection('cars').get()
  .then(collection => collection.docs.forEach(doc => console.log(doc.id, doc.data())))
  .catch(console.error)
  //Querry docs from collection:
  // db.collection('cars')
  //   .where('year', '>=', 2015)
  //   .get()
  //     .then(collection => {
  //       const cars = collection.docs.map(doc => {
  //           let car = doc.data() // {make, model, color, year}
  //           car.id = doc.id      // {make, model, color, year, id}
  //           return car
  //       })
  //       console.log(cars)
  //     })
  //     .catch(console.error)