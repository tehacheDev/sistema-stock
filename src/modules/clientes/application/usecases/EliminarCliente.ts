import { IClienteRepository } from '../../domain/repositories/IClienteRepository';

export class EliminarCliente {
  constructor(private readonly productoRepo: IClienteRepository) {}

  async eliminar(id: number): Promise<void> {
    await this.productoRepo.eliminarCliente(id);
  }
}

