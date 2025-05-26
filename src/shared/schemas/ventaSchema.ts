import { z } from 'zod';

export const detalleSchema = z.object({
    id_producto_variante: z.number().int().positive('El ID del producto variante debe ser un número entero positivo'),
    cantidad: z.number().int().positive('La cantidad debe ser un número entero positivo'),
    precio_unitario: z.number().positive('El precio unitario debe ser un número positivo'),
});

export const ventaSchema = z.object({
    id_cliente: z.number().int().positive('El ID del cliente debe ser un número entero positivo'),
    id_metodo_pago: z.number().int().positive('El ID del método de pago debe ser un número entero positivo'),
    total: z.number().positive('El total debe ser un número positivo')
});

export const crearVentaSchema = z.object({
    venta: ventaSchema,
    detalles: z.array(detalleSchema).nonempty('Se deben proporcionar al menos un detalle de venta'),
});