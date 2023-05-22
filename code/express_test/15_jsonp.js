const express = require('express')
const app = express()

app.get('/api/jsonp', (req, res) => {
  const { callback } = req.query
  const data = {
    name: 'wcb',
    age: 18
  }
  // res.send(`${callback}(${JSON.stringify(data)})`)
  res.send(`${callback}(${JSON.stringify(data)})`)
})