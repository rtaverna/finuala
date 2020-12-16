const router = require('express').Router()
const {Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      where: {
        inCart: true
      }
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.post('/:itemId', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId)
    item.inCart = false
    await item.save()
    const items = await Item.findAll({
      where: {
        inCart: true
      }
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})
