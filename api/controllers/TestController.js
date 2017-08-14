let sails = require('sails')

module.exports = {
  test: (req, res) => res.send(Object.keys(sails.models))
}
