"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// env variables - need displayed early as possible
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
// external imports
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// internal imports
const session_1 = __importDefault(require("./routes/session"));
const bookmarks_1 = __importDefault(require("./routes/bookmarks"));
const dataNewsApi_1 = __importDefault(require("./routes/dataNewsApi"));
const error_1 = __importDefault(require("./controllers/error"));
const session_2 = require("./middleware/session");
// express app
const app = express_1.default();
// middleware
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
//mount routers - api
app.use('/api/session', session_1.default);
app.use('/api/users/:id/bookmarks', session_2.requireAuthentication, session_2.requireAuthorization, bookmarks_1.default);
app.use('/api/dataNewsApi', dataNewsApi_1.default);
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
// generic error handler
app.use(error_1.default);
module.exports = app;
