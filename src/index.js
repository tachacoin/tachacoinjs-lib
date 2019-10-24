var tachacoinjs = require('bitcoinjs-lib')

Object.assign(tachacoinjs.networks, require('./networks'))

tachacoinjs.utils = require('./utils')

module.exports = tachacoinjs