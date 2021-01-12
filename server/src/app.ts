
// env variables - need displayed early as possible
import path from 'path'
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env')})

// external imports
import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

// internal imports
import sessionRouter from './routes/session'
import bookmarksRouter from './routes/bookmarks'
import genericErrorHandler from './controllers/error'
import { requireAuthentication, requireAuthorization } from './middleware/session'


// express app
const app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

//mount routers - api
app.use('/api/session', sessionRouter)
app.use(
  '/api/users/:id/bookmarks', 
  requireAuthentication,
  requireAuthorization,
  bookmarksRouter
  )

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

// generic error handler
app.use(genericErrorHandler);

module.exports = app;
