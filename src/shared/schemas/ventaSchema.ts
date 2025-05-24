import { z } from 'zod';

export const detalleSchema = z.object({
    id_detalle_venta: z.number().default(0),
    cantidad: z.number().int().positive('La cantidad debe ser un número entero positivo'),
    precio_unitario: z.number().positive('El precio unitario debe ser un número positivo'),
});

export const ventaSchema = z.object({
    id_cliente: z.number().int().positive('El ID del cliente debe ser un número entero positivo'),
    fecha: z.date().optional(),
    total: z.number().positive('El total debe ser un número positivo'),
    metodo_pago: z.string().min(1, 'El método de pago es requerido'),
    id_operacion: z.number().optional(),
    id_operacion_ventas: z.number().optional(),
});

export const crearVentaSchema = z.object({
    venta: ventaSchema,
    detalles: z.array(detalleSchema).nonempty('Se deben proporcionar al menos un detalle de venta'),
});