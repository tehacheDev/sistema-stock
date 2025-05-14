import { ProductoDTO } from '../application/dtos/ProductoDTO';
import { BadRequestError, NotFoundError } from '../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { 
  ListarProductos, 
  ListarVariantes, 
  RegistrarProducto, 
  ActualizarProducto, 
  ActualizarVariante, 
  EliminarProducto, 
  EliminarVariante 
} from '../application/index';

export class ProductoController {
  constructor(
    private readonly listarProductos: ListarProductos,
    private readonly listarVariantes: ListarVariantes,
    private readonly registrarProducto: RegistrarProducto,
    private readonly actualizarProducto: ActualizarProducto,
    private readonly actualizarVariante: ActualizarVariante,
    private readonly eliminarProducto: EliminarProducto,
    private readonly eliminarVariante: EliminarVariante,
  ) {}

  getProductos = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const productos = await this.listarProductos.listar();
      res.json(productos);
    } catch (error) {
      next(error);
    }
  };

  getVariantes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      const variantes = await this.listarVariantes.listarVariantes(id);
      if (!variantes) throw new NotFoundError('Variante no encontrado');
      res.json(variantes);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { producto, variantes } = req.body;
      const id_producto = await this.registrarProducto.registrar(producto, variantes);
      res.status(201).json({ msj: 'Producto registrado con éxito', id_producto });
    } catch (error) {
      next(error);
    }
  };

  updateProducto = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      const data: ProductoDTO = req.body;
      if (!data) throw new BadRequestError('Datos inválidos');
      const producto = await this.actualizarProducto.actualizarProducto(id, data);
      if (!producto) throw new NotFoundError('Producto no encontrado');
      res.status(200).json({ msj: 'Producto actualizado con éxito', producto });
    } catch (error) {
      next(error);
    }
  };

  updateVariante = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      const data = req.body;
      if (!data) throw new BadRequestError('Datos inválidos');
      const variante = await this.actualizarVariante.actualizarVariante(id, data);
      if (!variante) throw new NotFoundError('Variante no encontrada');
      res.status(200).json({ msj: 'Variante actualizada con éxito', variante });
    } catch (error) {
      next(error);
    }
  };

  deleteProducto = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      await this.eliminarProducto.eliminarProducto(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  deleteVariante = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      await this.eliminarVariante.eliminarVariante(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}