import { ClienteDTO } from '../../application/dtos/ClienteDTO';
import { BadRequestError, NotFoundError } from '../../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { 
    ListarCliente, 
    ListarClientePorId, 
    CrearCliente, 
    ActualizarCliente, 
    EliminarCliente
} from '../../index';

export class ClienteController {
    constructor(
        private readonly listarCliente: ListarCliente,
        private readonly obtenerClientePorId: ListarClientePorId,
        private readonly registrarCliente: CrearCliente,
        private readonly actualizarCliente: ActualizarCliente,
        private readonly eliminarCliente: EliminarCliente
    ) {}

    getClientes = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const clientes = await this.listarCliente.ejecutar();
            res.json(clientes);
        } catch (error) {
            next(error);
        }
    };

    getCliente = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const cliente = await this.obtenerClientePorId.ejecutar(id);
            if (!cliente) throw new NotFoundError('Cliente no encontrado');
            res.json(cliente);
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cliente: ClienteDTO = req.body;
            const id_cliente = await this.registrarCliente.ejecutar(cliente);
            res.status(201).json({ msj: 'Cliente registrado con éxito', id_cliente });
        } catch (error) {
            next(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const data: ClienteDTO = req.body;
            const id_cliente = await this.actualizarCliente.ejecutar(id, data);
            res.status(200).json({ msj: 'Cliente actualizado con éxito', id_cliente });
        } catch (error) {
            next(error);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const cliente = await this.eliminarCliente.ejecutar(id);
            res.status(200).json({ msj: 'Cliente eliminado con éxito', cliente });
        } catch (error) {
            next(error);
        }
    };
}
