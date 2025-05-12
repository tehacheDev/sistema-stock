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
import { BadRequestError, NotFoundError } from '../../../../shared/errors/AppError';

const router = Router();
const repo = new PostgresVarianteRepository();
const registrarVariante = new RegistrarVariante(repo);
const listarVariante = new ListarVariante(repo);
const actualizarVariante = new ActualizarVariante(repo);
const eliminarVariante = new EliminarVariante(repo);

router.post('/:id', validateBody(variantesSchema), async (req, res, next) => {
  try {
    logger.info('POST /variantes/:id');
    const id_producto = parseInt(req.params.id, 10);
    if (isNaN(id_producto)) throw new BadRequestError('ID inválido');
    const variantes = req.body.map((v: ProductoVariante) => ({ ...v, id_producto }));

    for (const variante of variantes) {
      await registrarVariante.registrar(variante);
    }
    res.status(201).json({ msj: 'Variante registrada con éxito' });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    logger.info('GET /variantes');
    const variantes = await listarVariante.listar();
    res.json(variantes);
  } catch (error) {
    next(error);
  }
}); 

router.put('/:id', validateBody(varianteSchema), async (req, res, next) => {
  try {
    logger.info('PUT /variantes/:id');
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) throw new BadRequestError('ID inválido');
    const variante = req.body;
    const varianteActualizada = await actualizarVariante.actualizar(id, variante);
    if (!varianteActualizada) throw new NotFoundError('Variante no encontrada');
    res.status(200).json({ msj: 'Variante actualizada con éxito' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    logger.info('DELETE /variantes/:id');
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) throw new BadRequestError('ID inválido');
    await eliminarVariante.eliminar(id);
    res.status(200).json({ msj: 'Variante eliminada con éxito' });
  } catch (error) {
    next(error);
  }
});

export default router;