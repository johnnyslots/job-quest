const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('ending')
})


module.exports = router
