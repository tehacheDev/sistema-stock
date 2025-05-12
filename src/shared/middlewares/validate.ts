import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import logger from '../utils/logger';

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errores = result.error.errors.map((e) => ({
        campo: e.path.join('.'),
        mensaje: e.message
      }));
      logger.error('Errores de validación:', errores);
      res.status(400).json({ errores });
      return; 
    }

    req.body = result.data;
    next();
  };
};

