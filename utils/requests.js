const requestHandler = method => (req, res) => method(req, res)

module.exports = {
  requestHandler
}