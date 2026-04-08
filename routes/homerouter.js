// core module
const path = require('path')

// external module
const express = require('express')

// local module
const rootdir = require('../utils/pathutils')

const homerouter = express.Router()

homerouter.get('/',(req,res,next) =>{
  res.sendFile(path.join(rootdir,'views','home.html'))
})

module.exports = homerouter