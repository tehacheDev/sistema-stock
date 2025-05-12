import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export const logRequests = (req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
};