const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extradetails = err.extradetails || "ERROR IN BACKEND"
    console.log(err);
    return res.status(status).json({ message, extradetails })
}

module.exports = errorMiddleware;