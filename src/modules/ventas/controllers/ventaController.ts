import { VentaDTO } from '../application/dtos/VentaDTO';
import { BadRequestError, NotFoundError } from '../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { 
ListarVentas,
CrearVenta
} from '../index';

export class VentaController {
    constructor(
        private readonly listarVentas: ListarVentas,
        private readonly crearVenta: CrearVenta
    ) {}

    getVentas = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const ventas = await this.listarVentas.listar();
            res.json(ventas);
        } catch (error) {
            next(error);
        }
    };

    create = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const { venta, detalles } = _req.body;
            const idVenta = await this.crearVenta.execute(venta, detalles);
            res.status(201).json({ message: 'Venta creada con éxito', idVenta });
        } catch (error) {
            next(error);
        }
    };
}  