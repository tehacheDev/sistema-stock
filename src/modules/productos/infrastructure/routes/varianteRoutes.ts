import logger from '../../../../shared/utils/logger';
import { Router } from 'express';
import { validateBody } from '../../../../shared/middlewares/validate';
import { variantesSchema, varianteSchema } from '../../../../shared/schemas/varianteSchema';
import { PostgresVarianteRepository } from '../db/PostgresVarianteRepository';
import { ProductoVariante } from '../../domain/entities/ProductoVariante';
import { 
  RegistrarVariante,
  ListarVariante,
  ActualizarVariante,
  EliminarVariante
} from '../../application/index';

const router = Router();
const repo = new PostgresVarianteRepository();
const registrarVariante = new RegistrarVariante(repo);
const listarVariante = new ListarVariante(repo);
const actualizarVariante = new ActualizarVariante(repo);
const eliminarVariante = new EliminarVariante(repo);

router.post('/:id', validateBody(variantesSchema), async (req, res) => {
  try {
    logger.info('POST /variantes/:id');
    const id_producto = parseInt(req.params.id, 10);
    const variantes = req.body.map((v: ProductoVariante) => ({ ...v, id_producto }));

    for (const variante of variantes) {
      await registrarVariante.registrar(variante);
    }
    res.status(201).json({ msj: 'Variante registrada con éxito' });
  } catch (error) {
    logger.error(`Error en POST /productos/variante/:id ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al crear variante', status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    logger.info('GET /variantes');
    const variantes = await listarVariante.listar();
    res.json(variantes);
  } catch (error) {
    logger.error(`Error en GET /variantes: ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al obtener variantes', status: 500 });
  }
}); 

router.put('/:id', validateBody(varianteSchema), async (req, res) => {
  try {
    logger.info('PUT /variantes/:id');
    const id = parseInt(req.params.id, 10);
    const variante = req.body;
    await actualizarVariante.actualizar(id, variante);
    res.status(200).json({ msj: 'Variante actualizada con éxito' });
  } catch (error) {
    logger.error(`Error en PUT /productos/variante/:id ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al actualizar variante', status: 500 });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    logger.info('DELETE /variantes/:id');
    const id = parseInt(req.params.id, 10);
    await eliminarVariante.eliminar(id);
    res.status(200).json({ msj: 'Variante eliminada con éxito' });
  } catch (error) {
    logger.error(`Error en DELETE /productos/variante/:id ${error instanceof Error ? error.message : String(error)}`);
    res.status(500).json({ msj: 'Error al eliminar variante', status: 500 });
  }
});

export default router;