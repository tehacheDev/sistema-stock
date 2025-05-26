import { Router } from 'express';
import { paramsSchema } from '../../../../shared/schemas/paramsSchema';
import { validateBody, validateParams } from '../../../../shared/middlewares/validate';
import { MovimientoController } from '../../infrastructure/controllers/movimientoControllers';
import { 
    ListarTodos,
    ListarMovimientoPorId,
    BuscarPorIdVariante,
    BuscarPorOperacion,
    BuscarPorRangoDeFechas,
    BuscarPorTipo,
    PrismaMovimientoRepository
} from '../../index';

const router = Router();
const repo = new PrismaMovimientoRepository();

const controller = new MovimientoController(
    new ListarTodos(repo),
    new ListarMovimientoPorId(repo),
    new BuscarPorIdVariante(repo),
    new BuscarPorOperacion(repo),
    new BuscarPorRangoDeFechas(repo),
    new BuscarPorTipo(repo)
);

router.get('/', controller.getMovimientos);
router.get('/:id', validateParams(paramsSchema), controller.getMovimiento);
router.get('/buscar/variante/:id', validateParams(paramsSchema), controller.getByIdVariante);
router.get('/buscar/operacion', validateBody(paramsSchema), controller.getByOperacion);
router.get('/buscar/rango-fechas', validateBody(paramsSchema), controller.getByRangoDeFechas);
router.get('/buscar/tipo', validateBody(paramsSchema), controller.getByTipo);

export default router;