import { BadRequestError, NotFoundError } from '../../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import {
    ListarTodos,
    ListarMovimientoPorId,
    BuscarPorIdVariante,
    BuscarPorOperacion,
    BuscarPorRangoDeFechas,
    BuscarPorTipo
} from '../../index';

export class MovimientoController {
    constructor(
        private readonly listarTodos: ListarTodos,
        private readonly listarMovimientoPorId: ListarMovimientoPorId,
        private readonly buscarPorIdVariante: BuscarPorIdVariante,
        private readonly buscarPorOperacion: BuscarPorOperacion,
        private readonly buscarPorRangoDeFechas: BuscarPorRangoDeFechas,
        private readonly buscarPorTipo: BuscarPorTipo
    ) {}

    getMovimientos = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const movimientos = await this.listarTodos.ejecutar();
            res.json(movimientos);
        } catch (error) {
            next(error);
        }
    };

    getMovimiento = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const movimiento = await this.listarMovimientoPorId.ejecutar(id);
            if (!movimiento) throw new NotFoundError('Movimiento no encontrado');
            res.json(movimiento);
        } catch (error) {
            next(error);
        }
    };

    getByIdVariante = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const movimientos = await this.buscarPorIdVariante.ejecutar(id);
            if (!movimientos) throw new NotFoundError('Movimientos no encontrados para la variante');
            res.json(movimientos);
        } catch (error) {
            next(error);
        }
    };

    getByOperacion = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { operacion } = req.body;
            if (!operacion) throw new BadRequestError('Operación es requerida');
            const movimientos = await this.buscarPorOperacion.ejecutar(operacion);
            if (!movimientos) throw new NotFoundError('Movimientos no encontrados para la operación');
            res.json(movimientos);
        } catch (error) {
            next(error);
        }
    };

    getByRangoDeFechas = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { fechaInicio, fechaFin } = req.query;
            if (!fechaInicio || !fechaFin) throw new BadRequestError('Fecha de inicio y fin son requeridas');
            const movimientos = await this.buscarPorRangoDeFechas.ejecutar(new Date(fechaInicio as string), new Date(fechaFin as string));
            if (!movimientos) throw new NotFoundError('Movimientos no encontrados para el rango de fechas');
            res.json(movimientos);
        } catch (error) {
            next(error);
        }
    };

    getByTipo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { tipo } = req.body;
            if (!tipo) throw new BadRequestError('Tipo es requerido');
            const movimientos = await this.buscarPorTipo.ejecutar(tipo);
            if (!movimientos) throw new NotFoundError('Movimientos no encontrados para el tipo');
            res.json(movimientos);
        } catch (error) {
            next(error);
        }
    };
}
