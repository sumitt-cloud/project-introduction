const path = require('path')

const express = require('express')

const rootdir = require('../utils/pathutils')

const homerouter = express.Router()

homerouter.get('/',(req,res,next) =>{
  res.sendFile(path.join(rootdir,"views","home.html"))
})

module.exports = homerouter