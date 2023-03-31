const errorHandlers = (err, req, res, next) => {
    console.log(err)
    if (err.name == "SequelizeValidationError"){
        const message = err.errors[0].message
        res.status(400).json({statusCode: 400, name: "Bad request", message})
    }
    else if (err.name == "JsonWebTokenError") res.status(400).json({statusCode: 400, message: "Invalid Token"})
    else if (err.name == "SequelizeDatabaseError") res.status(400).json({statusCode: 400, message: 'Something error'})
    else if (err.name == "SequelizeUniqueConstraintError") res.status(400).json({statusCode: 400, message: err.message})
    else if (err.name == "Invalid token") res.status(401).json({statusCode: 404, message: err.message})
    else if (err.name == "Invalid email or password") res.status(401).json({statusCode: 401, message:  err.message})
    else if (err.name == "is not exist") res.status(404).json({statusCode: 404, message: err.message})
    else res.status(500).json({statusCode: 500, message: "Internal Server Error"})
}

module.exports = errorHandlers