const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  materials: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  inCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Item
