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

// the list view, got to call the list with .find() and then pass it to ejs
app.get('/meets', async (req, res) => {
    const meets = await Meet.find({})
      res.render('meets/meets', {meets})
  })

// needed to put this route before the show route, even though I made the show route first
// render the form first, no need to be async
app.get('/meets/new', (req, res) => {
    res.render('meets/new')
  })
  
  
  // this is the post route, get stuff from the body and create a new document
  // then have to call save
  app.post('/meets', async (req, res) => {
    const newMeet = new Meet(req.body);
    await newMeet.save();
    res.redirect('/meets/')
  })

// the show one route, have to grab the id of the url from req.params
// then findbyId() and pass that to the ejs
app.get('/meets/:id', async (req, res) => {
    const {id} = req.params
    const meet = await Meet.findById(id)
    res.render('meets/show', {meet})
  })

  app.get('/meets/:id/edit', async(req, res) => {
    const {id} =  req.params
    const meet = await Meet.findById(id)
    res.render('meets/edit', {meet})
  })
  
  app.put('/meets/:id', async(req, res) => {
    const {id} = req.params;
    const meet = await Meet.findByIdAndUpdate(id, req.body, {runValidators: true})
    res.redirect(`/meets/${meet._id}`)
  })

  app.delete('/meets/:id', async (req, res) => {
    const {id} = req.params;
    const deleted = await Meet.findByIdAndDelete(id)
    res.redirect('/meets')
  })
  

app.listen(PORT || process.env.port, () => {
    console.log(`NOW LISTENING ON PORT ${PORT}`)
})