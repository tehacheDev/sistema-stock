
import { ClienteRepository } from '../../domain/repositories/ClienteRepository';
import { Cliente } from '../../domain/entities/Cliente';

export class ObtenerClientePorId {
  constructor(private readonly clienteRepo: ClienteRepository) {}

  async show(id: number): Promise<Cliente | null> {
    return await this.clienteRepo.obtenerClientePorId(id);
  }
}