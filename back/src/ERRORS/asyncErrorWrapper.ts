import { Request, Response, NextFunction } from "express";

type fnMiddle = (req: Request, res: Response, next: NextFunction) => {};
function errorWrapper(fn: fnMiddle) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
export default errorWrapper;
