import { NextFunction, Request, Response } from "express";
import HttpException from "../helpers/HttpException";

const httpErrorMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  const { status, message } = error as HttpException;
  response.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
