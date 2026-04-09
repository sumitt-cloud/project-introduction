// core module
const path = require('path')

// external module
const express = require('express')

// local module
const rootdir = require('../utils/pathutils')

const detailsrouter = express.Router()

detailsrouter.get('/details',(req,res,next) =>{
  res.sendFile(path.join(rootdir,'views','details.html'))
})

const formdata =[]

detailsrouter.post('/details',(req,res,next ) =>{
  console.log("details ", req.body)
  formdata.push(req.body)
  console.log(formdata)
  res.sendFile(path.join(rootdir,'views','details-submitted.html'))
 
})
module.exports = detailsrouter