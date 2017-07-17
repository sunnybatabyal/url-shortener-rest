/**
 * Includes code for shorterning the URL.
 */

'use strict'

// Include hashid.
const Hashids = require('hashids')

// Initialize the hash function with a salt and set the length of the hash.
var hashids = new Hashids('salt', 5)

// Import the default response objects.
var defRes = require('../models/defaultResponseValueModel')

/**
 * Shorters a URL specified in its arguemnt.
 */
exports.shorten = function (req, res) {
  res.json(hashids.encode(req.body.url))
}