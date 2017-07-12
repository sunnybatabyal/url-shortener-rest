/**
 * All API routes.
 */

'use strict'

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Welcome to urltu.me! shorterning your ULR is more easy than you think!')
    })
}