require('dotenv').config();
const massive = require('massive')
const express = require('express')

//========ENV Variables========
const {SERVER_PORT, CONNECTION_STRING} = process.env

//======== Server Setup=========
const app = express();

// ========MiddleWare=========
app.use(express.json())


// ======Database Connection=========
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Pepe DB Conencted!')
})
.catch(err => console.log(err))



// =======APP Listening========
app.listen(SERVER_PORT, () => {
  console.log(`Pepe Memein on ${SERVER_PORT}!`)
})