import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { AppError } from '../errors/AppError';


export const errorHandler = (err: unknown, req: Request, res: Response, _next: NextFunction): void => {
  if (err instanceof AppError) {
    logger.error(`${req.method} ${req.url} - ${err.message}`);
    res.status(err.statusCode).json({
      msj: err.message,
      detalles: err.details ?? null
    });
  } else {
    logger.error(`${req.method} ${req.url} - Error inesperado: ${err instanceof Error ? err.message : String(err)}`);
    res.status(500).json({ msj: 'Error interno del servidor' });
  }
};