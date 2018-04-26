const config = require('../config')
const mongojs = require('mongojs')
const db = mongojs(config.DB)
const agreements = db.collection('agreements')
const logger = require('./logger')

module.exports = data => {
  return new Promise((resolve, reject) => {
    agreements.save(data, (error, result) => {
      if (error) {
        logger('error', ['save-agreement', error])
        reject(error)
      } else {
        logger('info', ['save-agreement', 'success'])
        resolve(data.avtale)
      }
    })
  })
}
