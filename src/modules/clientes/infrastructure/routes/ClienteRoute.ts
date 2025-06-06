import { Router } from 'express';
import { validateBody, validateParams } from '../../../../shared/middlewares/validate';
import { clienteSchema } from '../../../../shared/schemas/clienteSchema';
import { PrismaClienteRepository } from '../db/PrismaClienteRepository';
import { ClienteController } from '../controllers/clientesController';
import { 
  ListarCliente, 
  ListarClientePorId, 
  CrearCliente, 
  ActualizarCliente, 
  EliminarCliente 
} from '../../index';
import { paramsSchema } from '../../../../shared/schemas/paramsSchema';

const router = Router();
const repo = new PrismaClienteRepository();

const controller = new ClienteController(
  new ListarCliente(repo),
  new ListarClientePorId(repo),
  new CrearCliente(repo),
  new ActualizarCliente(repo),
  new EliminarCliente(repo)
);

router.get('/', controller.getClientes);
router.get('/:id', validateParams(paramsSchema), controller.getCliente);
router.post('/', validateBody(clienteSchema), controller.create);
router.put('/:id', validateParams(paramsSchema), validateBody(clienteSchema), controller.update);
router.delete('/:id', validateParams(paramsSchema), controller.delete);

export default router;