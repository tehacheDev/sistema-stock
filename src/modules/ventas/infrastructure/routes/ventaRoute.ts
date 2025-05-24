import { Router } from 'express';
import { VentaController } from '../../controllers/ventaController';
import { PrismaVentaRepository } from '../db/PrismaVentaRepository';
import { PrismaProductoRepository } from '../../../productos/index';
import { validateBody } from '../../../../shared/middlewares/validate';
import { paramsSchema } from '../../../../shared/schemas/paramsSchema';
import { crearVentaSchema } from '../../../../shared/schemas/ventaSchema';
import { 
    ListarVentas,
    ListarVenta, 
    ListarDetalles,
    CrearVenta, 
    EliminarVenta,
} from '../../index';

const router = Router();

// Repositorios
const ventaRepository = new PrismaVentaRepository();
const productoRepository = new PrismaProductoRepository();


const controller = new VentaController(
    new ListarVentas(ventaRepository),
    new ListarVenta(ventaRepository),
    new ListarDetalles(ventaRepository),
    new CrearVenta(ventaRepository, productoRepository),
    new EliminarVenta(ventaRepository)
);

router.get('/', controller.getVentas);
router.get('/:id', validateBody(paramsSchema), controller.getVenta);
router.get('/:id/detalles', validateBody(paramsSchema), controller.getDetalles);
router.post('/', validateBody(crearVentaSchema), controller.create);
router.delete('/:id', validateBody(paramsSchema), controller.delete);

export default router;