import { z } from 'zod';

export const clienteSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  apellido: z.string().min(1, 'El apellido es requerido'),
  celular: z.string().min(1, 'El celular es requerido'),
});

export type ClienteDTO = z.infer<typeof clienteSchema>;