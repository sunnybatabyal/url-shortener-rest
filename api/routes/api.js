/**
* All API routes.
*/

'use strict'

// Include the controllers
var welcome = require('../controllers/defaultController')

module.exports = function (app) {

/**
 * Default get route.
 */
app.get('/', welcome.getDefaultMessage)

}