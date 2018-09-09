const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const app = express()

const startListening = () => {
  const server = app.listen(PORT, () => {
    console.log(`You are now live on port ${PORT}`)
  })
}

app.use('/', (req, res, next) => {
  console.log('HEYYY')
  res.json('HEYYY')
})

startListening()

module.exports = app

