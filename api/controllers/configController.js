/**
 * Reads configuration files.
 */

'use strict'

// Include jsonfile for reading contents of JSON files.
var jsonfile = require('jsonfile')

// Set config file to read.
var file = 'app.config'

// Read the config file and put the configs into a object.
jsonfile.readFile(file, function(err, obj) {
  // If config file is not present log error.
  if (err) {
    console.log(err)
    return
  }

  // Export config object.
  exports.config = obj
})