import dotenv from "dotenv";
import express from "express";
import './shared/database/connection';
import * as routes from "./shared/routes/route";
import { errorHandler } from "./shared/middlewares/errorHandler";
import { logRequests } from "./shared/middlewares/loggerMiddleware";

dotenv.config();

const app = express();

// Middleware para parsear el body de las peticiones
app.use(express.json());
// Middleware para registrar las peticiones
app.use(logRequests);
// Middleware para manejar errores
app.use(errorHandler);
// Routes
routes.register(app);
// Middleware para manejar CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

export default app;