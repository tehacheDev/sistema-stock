import logger from '../../../../shared/utils/logger';
import { Router } from 'express';
import { validateBody } from '../../../../shared/middlewares/validate';
import { clienteSchema } from '../../../../shared/schemas/clienteSchema';
import { PostgresClienteRepository } from '../db/PostgresClienteRepository';
import { 
    RegistrarCliente, 
    ListarCliente, 
    ObtenerClientePorId, 
    ActualizarCliente, 
    EliminarCliente 
} from '../../application/usecases/Index';

const router = Router();
const repo = new PostgresClienteRepository();
const listarCliente = new ListarCliente(repo);
const eliminarCliente = new EliminarCliente(repo);
const registrarCliente = new RegistrarCliente(repo);
const actualizarCliente = new ActualizarCliente(repo);
const obtenerClientePorId = new ObtenerClientePorId(repo);

router.post('/', validateBody(clienteSchema), async (req, res) => {
  try {
    logger.info('POST /clientes');
    const cliente = await registrarCliente.registrar(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    logger.error(`Error en POST /cliente: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al crear cliente', status: 500});
  }
});

router.get('/', async (req, res) => {
    try {
        logger.info('GET /clientes');
        const clientes = await listarCliente.listar();
        res.json(clientes);
    } catch (error) {
        logger.error(`Error en GET /clientes: ${error instanceof Error ? error.message : String(error)}`);
        res.status(500).json({ msj: 'Error al obtener clientes', status: 500 });
    }
});

router.get('/:id', async (req, res) => {
  try {
    logger.info('GET /clientes/:id');
    const id = parseInt(req.params.id, 10);
    const cliente = await obtenerClientePorId.show(id);
    res.json(cliente);
  } catch (error) {
    logger.error(`Error en GET /clientes/:id: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al obtener cliente', status: 500 });
  }
});

router.put('/:id', async (req, res) => {
  try {
    logger.info('PUT /clientes/:id');
    const id = parseInt(req.params.id, 10);
    const cliente = await actualizarCliente.actualizar(id, req.body);
    res.json(cliente);
  } catch (error) {
    logger.error(`Error en PUT /clientes/:id: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al actualizar clientes', status: 500 });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    logger.info('DELETE /clientes/:id');
    const id = parseInt(req.params.id, 10);
    await eliminarCliente.eliminar(id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Error en DELETE /clientes/:id: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al eliminar cliente', status: 500 });
  }
});

export default router;