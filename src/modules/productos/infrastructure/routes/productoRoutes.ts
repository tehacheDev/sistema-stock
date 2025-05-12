import logger from '../../../../shared/utils/logger';
import { Router } from 'express';
import { validateBody } from '../../../../shared/middlewares/validate';
import { productoSchema } from '../../../../shared/schemas/productoSchema';
import { PostgresProductoRepository } from '../db/PostgresProductoRepository';
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

router.post('/', validateBody(productoSchema), async (req, res) => {
  try {
    logger.info('POST /productos');
    const id_producto = await registrarProducto.registrar(req.body);
    res.status(201).json({ msj: 'Producto registrado con éxito' , id_producto });
  } catch (error) {
    logger.error(`Error en POST /productos: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al crear producto', status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    logger.info('GET /productos');
    const productos = await listarProductos.listar();
    res.json(productos);
  } catch (error) {
    logger.error(`Error en GET /productos: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al obtener productos', status: 500 });
  }
});

router.put('/:id', async (req, res) => {
  try {
    logger.info('PUT /productos/:id');
    const id = parseInt(req.params.id, 10);
    const producto = await actualizarProducto.actualizar(id, req.body);
    res.json(producto);
  } catch (error) {
    logger.error(`Error en PUT /productos/:id: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al actualizar producto', status: 500 });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    logger.info('DELETE /productos/:id');
    const id = parseInt(req.params.id, 10);
    await eliminarProducto.eliminar(id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Error en DELETE /productos/:id: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al eliminar producto', status: 500 });
  }
});

export default router;