import { Application } from "express";
import { productoRoutes } from '../../modules/productos/index';
import { ventasRoute } from '../../modules/ventas/index'
import { clienteRoutes } from '../../modules/clientes/index';
import { movimientoRoutes } from "../../modules/movimientos/index";

export const register = async (app: Application) => {
    const url = '/api/v1';

    app.use(`${url}/productos`, productoRoutes);
    app.use(`${url}/clientes`, clienteRoutes);
    app.use(`${url}/ventas`, ventasRoute);
    app.use(`${url}/movimientos`, movimientoRoutes);
};