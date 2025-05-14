import { Router } from 'express';
import { paramsSchema } from '../../../../shared/schemas/paramsSchema';
import { ProductoController } from '../../controllers/productoController';
import { crearProductoSchema } from '../../../../shared/schemas/productoSchema';
import { PostgresProductoRepository } from '../db/PostgresProductoRepository';
import { validateBody, validateParams } from '../../../../shared/middlewares/validate';
import { 
  ListarProductos, 
  ListarVariantes, 
  RegistrarProducto, 
  ActualizarProducto, 
  ActualizarVariante, 
  EliminarProducto, 
  EliminarVariante 
} from '../../application/index';

const router = Router();
const repo = new PostgresProductoRepository();

const controller = new ProductoController(
  new ListarProductos(repo),
  new ListarVariantes(repo),
  new RegistrarProducto(repo),
  new ActualizarProducto(repo),
  new ActualizarVariante(repo),
  new EliminarProducto(repo),
  new EliminarVariante(repo),
);

router.get('/', controller.getProductos);
router.get('/:id/variantes', validateParams(paramsSchema), controller.getVariantes);
router.post('/', validateBody(crearProductoSchema),controller.create);
router.put('/:id', validateParams(paramsSchema), controller.updateProducto);
router.put('/:id/variantes', validateParams(paramsSchema), controller.updateVariante);
router.delete('/:id', validateParams(paramsSchema), controller.deleteProducto);
router.delete('/:id/variantes', validateParams(paramsSchema), controller.deleteVariante);

export default router;