const {StatusCodes} = require('http-status-codes')

const not_found = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json('page not found')
}

module.exports = not_found