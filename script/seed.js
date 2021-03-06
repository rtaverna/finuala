'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Item} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const items = await Promise.all([
    Item.create({
      name: 'Hermatite Bracelet',
      materials: ['hermatite'],
      description: 'blah blah blah blah blah blah blah',
      price: 20,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/19/WLA_hmns_Hematite.jpg'
    }),
    Item.create({
      name: 'Hermatite Necklace',
      materials: ['hermatite'],
      description: 'blah blah blah blah blah blah blah',
      price: 20,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/19/WLA_hmns_Hematite.jpg'
    }),
    Item.create({
      name: 'Czech Tile Bracelet',
      materials: ['Czech Tile'],
      description: 'blah blah blah blah blah blah blah',
      price: 20,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/19/WLA_hmns_Hematite.jpg'
    }),
    Item.create({
      name: 'Czech Tile and Glass Bracelet',
      materials: ['Czech Tile', 'Glass'],
      description: 'blah blah blah blah blah blah bla',
      price: 20,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/19/WLA_hmns_Hematite.jpg'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
