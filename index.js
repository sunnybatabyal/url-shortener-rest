const express = require('express')
const app = express()

// Include the api routes.
var routes = require('./api/routes/api')

// Call the routes in action.
routes(app)

// Start the server on specific port.
app.listen(3210, function () {
    console.log('Server is running at port : 3210')
})