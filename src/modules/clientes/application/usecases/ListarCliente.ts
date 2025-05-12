import { ClienteRepository } from '../../domain/repositories/ClienteRepository';
import { Cliente } from '../../domain/entities/Cliente';

export class ListarCliente {
  constructor(private readonly productoRepo: ClienteRepository) {}

  async listar(): Promise<Cliente[]> {
    return await this.productoRepo.obtenerClientes();
  }
}

