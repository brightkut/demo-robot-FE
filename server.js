const express = require('express')

const app = express()
const path = require('path');

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/csv', (req, res) => {

//  res.attachment(path.join(__dirname+'./resource/demo.csv')).send(csv)
  res.download(path.join(__dirname+'/resource/demo.csv'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})