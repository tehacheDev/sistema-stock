import { IClienteRepository } from '../../domain/repositories/IClienteRepository';
import { ClienteDTO } from '../dtos/ClienteDTO';

export class ListarCliente {
  constructor(private readonly productoRepo: IClienteRepository) {}

  async ejecutar(): Promise<ClienteDTO[]> {
    return await this.productoRepo.obtenerClientes();
  }
}

