/**
 * Default welcome controller for handlling the default get '/' route
 */

'use strict'

// Import the default response objects.
var defRes = require('../models/defaultResponseValueModel')

/**
 * CallBack for the default route.
 */
exports.getDefaultMessage = function (req, res) {
  // Set status message and status code.
  defRes.status.message = 'OK'
  defRes.status.code = 200

  // Set the response message.
  defRes.data = {
    message: 'Howdy! Welcome to urltu.me API. Shortering URL is more easy than you think.'
  }

  // Set error object to null.
  defRes.error = null

  // Prepare the response and send.
  res.json(defRes)
}