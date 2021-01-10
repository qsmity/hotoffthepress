import { Request, Response, NextFunction} from 'express'

// status will be added later upon error handling in routes
interface Error {
    status?: number;
    message: string;
  }
  
const genericErrorHandler = function (err: Error, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.json({
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }

export default genericErrorHandler;