import dotenv from "dotenv";
import express from "express";
import * as routes from "./shared/routes/route";
import { logRequests } from "./shared/middlewares/loggerMiddleware";
import { NotFoundError } from "./shared/errors/AppError";
import { errorHandler } from "./shared/middlewares/errorHandler";

dotenv.config();

const app = express();

// Middleware para parsear el body de las peticiones
app.use(express.json());
// Middleware para registrar las peticiones
app.use(logRequests);
// Routes
routes.register(app);
// Middleware para manejar CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Middleware para rutas no encontradas
app.use((req, res, next) => {
  next(new NotFoundError('La ruta solicitada no existe'));
});

// Middleware global de errores (siempre el último)
app.use(errorHandler);


export default app;