const errorHandlers = (err, req, res, next) => {
    console.log(err)
    if (err.name == "SequelizeValidationError"){
        const message = err.errors[0].message
        res.status(400).json({statusCode: 400, name: "Bad request", message})
    }
    else res.status(500).json({statusCode: 500, message: "Internal Server Error"})
}

module.exports = errorHandlers