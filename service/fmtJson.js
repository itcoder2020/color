
let fmt = (code, message, error, data) => {
    return {
        statusCode: code,
        message: message,
        error: error,
        data: data
    };
}

module.exports.json = fmt