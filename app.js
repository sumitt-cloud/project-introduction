const express = require('express')
const app = express()

const path = require('path')
const rootdir = require('./utils/pathutils')

// ✅ middleware first
app.use(express.urlencoded({ extended: true }))

const homerouter = require("./routes/homerouter")
app.use(homerouter)

const detailsrouter = require("./routes/detailsrouter")
app.use(detailsrouter)

const PORT = 3005
app.listen(PORT ,() =>{
  console.log(`server running at address http://localhost:${PORT}`)
})