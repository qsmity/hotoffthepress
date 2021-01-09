// external imports
import createError from 'http-errors';
import express, { Request, Response, NextFunction} from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// internal imports
import sessionRouter from './routes/session'
import userRouter from './routes/user'

// express app
const app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//mount routers - api
app.use('/api/session', sessionRouter)
app.use('/api/user', userRouter)

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
  next(createError(404));
});

// status will be added later upon error handling in routes
interface Error {
  status?: number;
  message: string;
}

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
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
