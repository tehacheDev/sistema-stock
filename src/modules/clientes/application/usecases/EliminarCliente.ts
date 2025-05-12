import { ClienteRepository } from '../../domain/repositories/ClienteRepository';

export class EliminarCliente {
  constructor(private readonly productoRepo: ClienteRepository) {}

  async eliminar(id: number): Promise<void> {
    await this.productoRepo.eliminarCliente(id);
  }
}

