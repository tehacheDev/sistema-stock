import { z } from 'zod';

export const productoSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  categoria: z.string().min(1, 'La categoría es requerida'),
  costo: z.number().nonnegative('El costo no puede ser negativo'),
  precio_unitario: z.number().nonnegative('El precio unitario no puede ser negativo')
});

export type ProductoDTO = z.infer<typeof productoSchema>;