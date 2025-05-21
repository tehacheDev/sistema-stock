import { Router } from 'express';
import { PrismaVentaRepository } from '../db/PrismaVentaRepository';
import { PrismaProductoRepository } from '../../../productos/index';
import { CrearVenta, ListarVentas } from '../../index';
import { VentaController } from '../../controllers/ventaController';

const router = Router();

// Repositorios
const ventaRepository = new PrismaVentaRepository();
const productoRepository = new PrismaProductoRepository();


const controller = new VentaController(
    new ListarVentas(ventaRepository),
    new CrearVenta(ventaRepository, productoRepository)
);

router.get('/', controller.getVentas);
router.post('/', controller.create);

export default router;