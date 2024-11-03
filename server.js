const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const cors = require('cors')
require('dotenv').config();
let dbConnectionString = process.env.DB_STRING
const mongoose = require('mongoose');
const Meet = require('./models/model')
const methodOverride = require('method-override')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbConnectionString);
  console.log('CONNECTED TO DATABASE')
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(methodOverride('_method'))

app.listen(PORT || process.env.port, () => {
    console.log(`NOW LISTENING ON PORT ${PORT}`)
})