import { ProductoDTO } from '../../application/dtos/ProductoDTO';
import { BadRequestError, NotFoundError } from '../../../../shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { 
  ListarProductos, 
  ListarVariantes, 
  ListarVariantePorId,
  CrearProducto, 
  ActualizarProducto, 
  ActualizarVariante, 
  EliminarProducto, 
  EliminarVariante, 
} from '../../index';

export class ProductoController {
  constructor(
    private readonly listarProductos: ListarProductos,
    private readonly listarVariantes: ListarVariantes,
    private readonly listarVariante: ListarVariantePorId,
    private readonly registrarProducto: CrearProducto,
    private readonly actualizarProducto: ActualizarProducto,
    private readonly actualizarVariante: ActualizarVariante,
    private readonly eliminarProducto: EliminarProducto,
    private readonly eliminarVariante: EliminarVariante,
  ) {}

  getProductos = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const productos = await this.listarProductos.ejecutar();
      res.json(productos);
    } catch (error) {
      next(error);
    }
  };

  getVariantes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      const variantes = await this.listarVariantes.ejecutar(id);
      if (!variantes) throw new NotFoundError('Variantes no encontrados');
      res.json(variantes);
    } catch (error) {
      next(error);
    }
  };

  getVariante = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      const variante = await this.listarVariante.ejecutar(id);
      if (!variante) throw new NotFoundError('Variante no encontrado');
      res.json(variante);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { producto, variantes } = req.body;
      const id_producto = await this.registrarProducto.ejecutar(producto, variantes);
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
      const producto = await this.actualizarProducto.ejecutar(id, data);
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
      const variante = await this.actualizarVariante.ejecutar(id, data);
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
      await this.eliminarProducto.ejecutar(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  deleteVariante = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) throw new BadRequestError('ID inválido');
      await this.eliminarVariante.ejecutar(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}