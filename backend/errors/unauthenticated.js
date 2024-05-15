const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom_api");


class UnauthenticatedError extends Error {
    constructor(message) {
        super(message)
        this.statuscode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError