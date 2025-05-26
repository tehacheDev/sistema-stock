import { Decimal } from "@prisma/client/runtime/library";

export interface ProductoDTO {
  id_categoria: number;
  nombre: string;
  costo: Decimal;
  precio_unitario: Decimal;
  id_producto?: number; // Optional, as it may not be present in all DTOs
}