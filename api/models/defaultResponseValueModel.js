/**
 * Contents all the response objects with there default values.
 */

'use strict'

/**
 * Default status JSON format.
 */
var status = {
      message: '',
      code: '',
  }

/**
 * Default data JSON format.
 */
var data = []

/**
 * Default error JSON format.
 */
var error = {
    message: '',
    code: '',
    type: '',
    solutionLink: '',
}

/**
 * Export the objects to be re used.
 */
exports.status = status
exports.error = error
exports.data = data