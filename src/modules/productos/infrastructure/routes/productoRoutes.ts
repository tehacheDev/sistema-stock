import { Router } from 'express';
import { validateBody } from '../../../../shared/middlewares/validate';
import { crearProductoSchema } from '../../../../shared/schemas/productoSchema';
import { ProductoController } from '../../controllers/productoController';
import { PostgresProductoRepository } from '../db/PostgresProductoRepository';
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
router.get('/:id/variantes', controller.getVariantes);
router.post('/', validateBody(crearProductoSchema),controller.create);
router.put('/:id', controller.updateProducto);
router.put('/:id/variantes', controller.updateVariante);
router.delete('/:id', controller.deleteProducto);
router.delete('/:id/variantes', controller.deleteVariante);

export default router;