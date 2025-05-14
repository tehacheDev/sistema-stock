
import { IClienteRepository } from '../../domain/repositories/IClienteRepository';
import { ClienteDTO } from '../dtos/ClienteDTO';

export class ObtenerClientePorId {
  constructor(private readonly clienteRepo: IClienteRepository) {}

  async show(id: number): Promise<ClienteDTO> {
    return await this.clienteRepo.obtenerClientePorId(id);
  }
}