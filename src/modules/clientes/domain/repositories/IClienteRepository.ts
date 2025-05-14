import { ClienteDTO } from '../../application/dtos/ClienteDTO';

export interface IClienteRepository {
  crearCliente(cliente: ClienteDTO): Promise<number>;
  obtenerClientes(): Promise<ClienteDTO[]>;
  obtenerClientePorId(id: number): Promise<ClienteDTO>;
  actualizarCliente(id_cliente: number , producto: ClienteDTO): Promise<number>;
  eliminarCliente(id: number): Promise<boolean>;
}