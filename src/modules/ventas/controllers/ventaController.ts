import { VentaDTO } from '../application/dtos/VentaDTO';
import { BadRequestError, NotFoundError } from '../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { 
    ListarVentas,
    ListarVenta,
    ListarDetalles,
    CrearVenta,
    EliminarVenta
} from '../index';

export class VentaController {
    constructor(
        private readonly listarVentas: ListarVentas,
        private readonly listarVenta: ListarVenta,
        private readonly listarDetalles: ListarDetalles,
        private readonly crearVenta: CrearVenta,
        private readonly eliminarVenta: EliminarVenta
    ) {}

    getVentas = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const ventas = await this.listarVentas.listar();
            res.json(ventas);
        } catch (error) {
            next(error);
        }
    };

    getVenta = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(_req.params.id);
            if (isNaN(id)) throw new BadRequestError('ID de venta inválido');
            const venta = await this.listarVenta.listar(id);
            if (!venta) {
                throw new NotFoundError('Venta no encontrada');
            }
            res.json(venta);
        } catch (error) {
            next(error);
        }
    };

    getDetalles = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(_req.params.id);
            if (isNaN(id)) throw new BadRequestError('ID de venta inválido');
            const detalles = await this.listarDetalles.listarDetalles(id);
            if (!detalles) throw new NotFoundError('Detalles no encontrados');
            res.json(detalles);
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

    delete = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(_req.params.id);
            if (isNaN(id)) throw new BadRequestError('ID de venta inválido');
            await this.eliminarVenta.execute(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
}  