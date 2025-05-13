import { z } from 'zod';

export const varianteSchema = z.object({
  id_producto: z.number().default(0),
  talle: z.string().min(1, 'El talle es requerido'),
  stock_actual: z.number().int().nonnegative('El stock no puede ser negativo'),
  color: z.string().min(1, 'El color es requerido'),
});

export const productoSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  categoria: z.string().min(1, 'La categoría es requerida'),
  costo: z.number().nonnegative('El costo no puede ser negativo'),
  precio_unitario: z.number().nonnegative('El precio unitario no puede ser negativo')
});

export const crearProductoSchema = z.object({
  producto: productoSchema,
  variantes: z.array(varianteSchema).nonempty('Al menos una variante es requerida'),
});

export type CrearProductoDTO = z.infer<typeof crearProductoSchema>;