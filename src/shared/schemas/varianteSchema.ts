import { z } from 'zod';

export const varianteSchema = z.object({
  id_producto: z.number().default(0),
  talle: z.string().min(1, 'El talle es requerido'),
  stock_actual: z.number().int().nonnegative('El stock no puede ser negativo'),
  color: z.string().min(1, 'El color es requerido'),
});

export const variantesSchema = z.array(varianteSchema);
export type VarianteDTO = z.infer<typeof variantesSchema>;