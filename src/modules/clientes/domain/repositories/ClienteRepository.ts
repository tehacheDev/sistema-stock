import { Cliente } from '../entities/Cliente';

export interface ClienteRepository {
  crearCliente(cliente: Cliente): Promise<Cliente>;
  obtenerClientes(): Promise<Cliente[]>;
  obtenerClientePorId(id: number): Promise<Cliente | null>;
  actualizarCliente(id_cliente: number , producto: Cliente): Promise<Cliente>;
  eliminarCliente(id: number): Promise<void>;
}