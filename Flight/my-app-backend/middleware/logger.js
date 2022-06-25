const logger = (req,res,next) => { // Using to check between http requests.
    console.log("Request received from " + req.originalUrl);
    next();
}

module.exports = logger;