const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/btc', (req, res) => {
  axios('https://api.coindesk.com/v1/bpi/historical/close.json')
  // Range Request:
  // https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
  .then(price => {
    res.status(200).send(price.data)
  })
  .catch(err => {
    res.status(404).send(err)
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})