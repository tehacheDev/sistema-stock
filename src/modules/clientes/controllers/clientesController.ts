import { ClienteDTO } from '../application/dtos/ClienteDTO';
import { BadRequestError, NotFoundError } from '../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { 
    ListarCliente, 
    ObtenerClientePorId, 
    RegistrarCliente, 
    ActualizarCliente, 
    EliminarCliente
} from '../application/Index';

export class ClienteController {
    constructor(
        private readonly listarCliente: ListarCliente,
        private readonly obtenerClientePorId: ObtenerClientePorId,
        private readonly registrarCliente: RegistrarCliente,
        private readonly actualizarCliente: ActualizarCliente,
        private readonly eliminarCliente: EliminarCliente
    ) {}

    getClientes = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const clientes = await this.listarCliente.listar();
            res.json(clientes);
        } catch (error) {
            next(error);
        }
    };

    getCliente = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const cliente = await this.obtenerClientePorId.show(id);
            if (!cliente) throw new NotFoundError('Cliente no encontrado');
            res.json(cliente);
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cliente: ClienteDTO = req.body;
            const id_cliente = await this.registrarCliente.registrar(cliente);
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
            const id_cliente = await this.actualizarCliente.actualizar(id, data);
            res.status(200).json({ msj: 'Cliente actualizado con éxito', id_cliente });
        } catch (error) {
            next(error);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) throw new BadRequestError('ID inválido');
            const cliente = await this.eliminarCliente.eliminar(id);
            res.status(200).json({ msj: 'Cliente eliminado con éxito', cliente });
        } catch (error) {
            next(error);
        }
    };
}
