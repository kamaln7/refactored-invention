"use strict"

const cow = require('vaca')

module.exports = (context, callback) => {
    callback(undefined, `A cow for you!

${cow()}`)
}
