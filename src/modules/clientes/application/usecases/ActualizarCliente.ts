import { Cliente } from '../../domain/entities/Cliente';
import { IClienteRepository } from '../../domain/repositories/IClienteRepository';
import { ClienteDTO } from '../dtos/ClienteDTO';

export class ActualizarCliente {
  constructor(private readonly productoRepo: IClienteRepository) {}

  async actualizar(id_producto: number, data: ClienteDTO): Promise<number> {
    const producto = new Cliente(
      data.nombre,
      data.apellido,
      data.celular
    );

    const result = await this.productoRepo.actualizarCliente(id_producto, producto);
    return result;
  }
}