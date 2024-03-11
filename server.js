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

app.listen(PORT || process.env.port, () => {
    console.log(`NOW LISTENING ON PORT ${PORT}`)
})