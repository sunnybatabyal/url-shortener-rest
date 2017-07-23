/**
 * Includes code for shorterning the URL.
 */

'use strict'

// Include hashid.
const Hashids = require('hashids')

// Initialize the hash function with a salt and set the length of the hash.
var hashids = new Hashids('', 5)

// Import the default response objects.
var defRes = require('../models/defaultResponseValueModel')

// Import the default response objects.
var defRes = require('../models/defaultResponseValueModel')

/**
 * Shorters a URL specified in its arguemnt.
 */
exports.shorten = function (req, res) {
  sendResponse(hashUrlId(getUrlId(req.body.url)), res)
}

/**
 * Sends the provided URL to the model and gets its ID after saving in DB.
 * 
 * @param {string} longUrl The URL to be shortened.
 * @return {number} The ID of the URl saved in DB.
 */
var getUrlId = function (longUrl) {
  return 5
}

/**
 * Hashes the URL ID and sends it to model to save in DB.
 * 
 * @param {number} urlId The URL ID of the record stored in DB.
 * @return {string} The hashed and shortened URL.
 */
var hashUrlId = function (urlId) {
  return hashids.encode(urlId)
}

/**
 * Prepars the API response and sends it as JSON.
 * 
 * @param {string} hashedUrl The shortened and hashed URL.
 */
var sendResponse = function (hashedUrl, res) {
  // Set status message and status code.
  defRes.status.message = 'OK'
  defRes.status.code = 200

  // Set the response message.
  defRes.data = {
    url: hashedUrl,
    message: 'URL has been shortened successfully! Thanks for using our service.'
  }

  // Set error object to null.
  defRes.error = null

  res.json(defRes)
}