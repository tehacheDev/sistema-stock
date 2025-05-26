import { Movimiento } from '../entities/Movimiento';

export interface IMovimientoRepository {
    withTransaction<T>(fn: (tx: any) => Promise<T>): Promise<T>;
    buscarPorIdVariante(id_variante: number): Promise<Movimiento[]>;
    buscarPorOperacion(id_operacion: number): Promise<Movimiento[]>;
    buscarPorRangoDeFechas(desde: Date, hasta: Date): Promise<Movimiento[]>;
    buscarPorTipo(tipo: 'entrada' | 'salida' | 'ajuste'): Promise<Movimiento[]>;
    crearMovimiento(movimiento: Movimiento, tx?: any): Promise<number>;
    eliminarMovimiento(id: number): Promise<void>;
    listarTodos(): Promise<Movimiento[]>;
    listarMovimientoPorId(id: number): Promise<Movimiento | null>;
}