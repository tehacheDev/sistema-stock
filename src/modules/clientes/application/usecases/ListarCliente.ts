import { IClienteRepository } from '../../domain/repositories/IClienteRepository';
import { ClienteDTO } from '../dtos/ClienteDTO';

export class ListarCliente {
  constructor(private readonly productoRepo: IClienteRepository) {}

  async listar(): Promise<ClienteDTO[]> {
    return await this.productoRepo.obtenerClientes();
  }
}

