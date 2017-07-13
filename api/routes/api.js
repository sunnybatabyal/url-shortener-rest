/**
* All API routes.
*/

'use strict'

// Include the controllers
var welcome = require('../controllers/defaultController')
var short = require('../controllers/urlShortenController')

module.exports = function (app) {

/**
 * Default get route.
 */
app.get('/', welcome.getDefaultMessage)

/**
 * Shorten url route.
 */
app.post('/short', short.shorten)

}