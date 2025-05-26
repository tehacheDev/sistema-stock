
import { IClienteRepository } from '../../domain/repositories/IClienteRepository';
import { ClienteDTO } from '../dtos/ClienteDTO';

export class ListarClientePorId {
  constructor(private readonly clienteRepo: IClienteRepository) {}

  async ejecutar(id: number): Promise<ClienteDTO> {
    return await this.clienteRepo.obtenerClientePorId(id);
  }
}