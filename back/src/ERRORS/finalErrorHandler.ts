import { ErrorRequestHandler } from "express";

const finalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error, "final error handler middle");
  console.log(error.message);

  //DEFAULT
  return res
    .status(error?.statusCode || 500)
    .json({ message: error?.message || "Some error happened." });
};
export default finalErrorHandler;
