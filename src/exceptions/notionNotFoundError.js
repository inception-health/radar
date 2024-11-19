const NotionNotFoundError = function (message) {
  this.message = message
}

Object.setPrototypeOf(NotionNotFoundError, Error)
NotionNotFoundError.prototype = Object.create(Error.prototype)
NotionNotFoundError.prototype.name = 'NotionNotFoundError'
NotionNotFoundError.prototype.message = ''
NotionNotFoundError.prototype.constructor = NotionNotFoundError

module.exports = NotionNotFoundError
