"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericErrorHandler = function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        message: err.message || 'Something went wrong!',
        error: err,
    });
};
exports.default = genericErrorHandler;
