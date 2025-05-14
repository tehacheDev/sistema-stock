import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import logger from '../utils/logger';
import { BadRequestError } from '../errors/AppError';

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

  if (!result.success) {
    const errores = result.error.errors.map((e) => ({
      campo: e.path.join('.'),
      mensaje: e.message
    }));
    logger.warn(`Errores de validación: ${JSON.stringify(errores)}`);
    return next(new BadRequestError('Datos de entrada inválidos', errores));
  }

    req.body = result.data;
    next();
  };
};

export const validateParams = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      const errores = result.error.errors.map((e) => ({
        campo: e.path.join('.'),
        mensaje: e.message
      }));
      logger.warn(`Errores de validación en params: ${JSON.stringify(errores)}`);
      return next(new BadRequestError('Parámetros inválidos', errores));
    }

    req.params = result.data;
    next();
  };
};