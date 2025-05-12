export class AppError extends Error {
  public readonly statusCode: number;
  public readonly details: string | unknown | undefined;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Recurso no encontrado') {
    super(message, 404);
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Solicitud incorrecta', details?: any) {
    super(message, 400, details);
  }
}
export class UnauthorizedError extends AppError {
  constructor(message = 'No autorizado') {
    super(message, 401);
  }
}
