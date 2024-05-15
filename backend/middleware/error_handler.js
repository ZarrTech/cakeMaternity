const { CustomAPIError}  = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (req, res, err, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.msg})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({mgs: 'something went wrong pls try again'})
}

module.exports = errorHandlerMiddleware