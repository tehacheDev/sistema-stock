import logger from '../../../../shared/utils/logger';
import { Router } from 'express';
import { validateBody } from '../../../../shared/middlewares/validate';
import { productoSchema } from '../../../../shared/schemas/productoSchema';
import { PostgresProductoRepository } from '../db/PostgresProductoRepository';
import { BadRequestError, NotFoundError } from '../../../../shared/errors/AppError';
import { 
  RegistrarProducto, 
  ListarProductos, 
  ActualizarProducto, 
  EliminarProducto 
} from '../../application/index';

const router = Router();
const repo = new PostgresProductoRepository();
const listarProductos = new ListarProductos(repo);
const eliminarProducto = new EliminarProducto(repo);
const registrarProducto = new RegistrarProducto(repo);
const actualizarProducto = new ActualizarProducto(repo);

router.post('/', validateBody(productoSchema), async (req, res, next) => {
  try {
    logger.info('POST /productos');
    const id_producto = await registrarProducto.registrar(req.body);
    if (isNaN(id_producto)) throw new BadRequestError('ID del producto no válido');
    res.status(201).json({ msj: 'Producto registrado con éxito' , id_producto });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    logger.info('GET /productos');
    const productos = await listarProductos.listar();
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    logger.info('PUT /productos/:id');
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) throw new BadRequestError('ID inválido');
    const producto = await actualizarProducto.actualizar(id, req.body);
    if (!producto) throw new NotFoundError('Producto no encontrado');
    res.status(200).json({ msj: 'Producto actualizado con éxito', producto });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    logger.info('DELETE /productos/:id');
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) throw new BadRequestError('ID inválido');
    await eliminarProducto.eliminar(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;