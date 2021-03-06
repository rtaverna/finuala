const router = require('express').Router()
const {Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.post('/:itemId', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId)
    item.inCart = true
    await item.save()
  } catch (err) {
    next(err)
  }
})
