const express = require('express')

const rootdir = require('../utils/pathutils')
const path = require('path')

const detailsrouter = express.Router()

detailsrouter.get('/details',(req,res,next) =>{
  res.sendFile(path.join(rootdir,'views','details.html'))
})

detailsrouter.post('/details',(req,res,next ) =>{
  console.log(req.body)
  res.sendFile(path.join(rootdir,'views',"details-submitted.html"))
})
module.exports = detailsrouter