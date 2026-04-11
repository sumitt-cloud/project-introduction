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

app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views','views')

app.use((req,res,next ) => {
  res.sendFile(path.join(rootdir,"views","error.html"))
})

const PORT = 3005
app.listen(PORT ,() =>{
  console.log(`server running at address http://localhost:${PORT}`)
})
