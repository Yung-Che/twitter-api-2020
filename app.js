if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const { apis } = require('./routes');
const helpers = require('./_helpers');
const cors = require('cors')
const passport = require('./config/passport')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(passport.initialize())

app.use('/api', apis)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
