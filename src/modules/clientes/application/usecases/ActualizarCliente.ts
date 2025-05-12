import { ClienteRepository } from '../../domain/repositories/ClienteRepository';
import { Cliente } from '../../domain/entities/Cliente';

interface InputDTO {
  nombre: string;
  apellido: string;
  celular: string;
}

export class ActualizarCliente {
  constructor(private readonly productoRepo: ClienteRepository) {}

  async actualizar(id_producto: number, data: InputDTO): Promise<void> {
    const producto = new Cliente(
      data.nombre,
      data.apellido,
      data.celular
    );

    await this.productoRepo.actualizarCliente(id_producto, producto);
  }
}