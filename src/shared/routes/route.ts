import { Application } from "express";
import productoRoutes from '../../modules/productos/infrastructure/routes/productoRoutes';
import varianteRoutes from '../../modules/productos/infrastructure/routes/varianteRoutes';
import clientesRoutes from '../../modules/clientes/infrastructure/routes/ClienteRoute';

export const register = async (app: Application) => {
    const url = '/api/v1';

    app.use(`${url}/productos`, productoRoutes);
    app.use(`${url}/variantes`, varianteRoutes);
    app.use(`${url}/clientes`, clientesRoutes);

};