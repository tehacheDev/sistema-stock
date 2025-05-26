import { IClienteRepository } from '../../domain/repositories/IClienteRepository';

export class EliminarCliente {
  constructor(private readonly productoRepo: IClienteRepository) {}

  async ejecutar(id: number): Promise<void> {
    await this.productoRepo.eliminarCliente(id);
  }
}

