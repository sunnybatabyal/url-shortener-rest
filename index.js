// Include express.
const express = require('express')
const app = express()

// Include mongoose.
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb://localhost/url-shorten-rest', {
  useMongoClient: true
})

// Include body parser
const bodyParser = require('body-parser')

/**
 * Parses the text as URL encoded data (which is how browsers tend to send form
 * data from regular forms set to POST)and exposes the resulting object
 * (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
  extended: true
}))

// Include the api routes.
var routes = require('./api/routes/api')

// Call the routes in action.
routes(app)

// Start the server on specific port.
app.listen(3210, function () {
  console.log('Server is running at port : 3210')
})