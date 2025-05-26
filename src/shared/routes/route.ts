import { Application } from "express";
import { productoRoutes } from '../../modules/productos/index';
import { ventasRoute } from '../../modules/ventas/index'
import clientesRoutes from '../../modules/clientes/infrastructure/routes/clienteRoute';

export const register = async (app: Application) => {
    const url = '/api/v1';

    app.use(`${url}/productos`, productoRoutes);
    app.use(`${url}/clientes`, clientesRoutes);
    app.use(`${url}/ventas`, ventasRoute);
};