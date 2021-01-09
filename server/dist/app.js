"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// external imports
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// internal imports
const session_1 = __importDefault(require("./routes/session"));
const user_1 = __importDefault(require("./routes/user"));
// express app
const app = express_1.default();
// middleware
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
//mount routers - api
app.use('/api/session', session_1.default);
app.use('/api/user', user_1.default);
// register views
app.set('view engine', 'html');
// sandbox routes
app.get('/api', (req, res) => {
    res.send(`${new Date()}`);
});
app.get('/api/users', (req, res) => {
    res.send(['Aang', 'Katara', 'Momo', 'Sokka', 'Appa']);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
});
module.exports = app;
