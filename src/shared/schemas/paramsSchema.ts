import { z } from "zod";

export const paramsSchema = z.object({
    id: z
        .string()
        .regex(/^\d+$/, { message: 'El ID debe ser un número válido' })
});