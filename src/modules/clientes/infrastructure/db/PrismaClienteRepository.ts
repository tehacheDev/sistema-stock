import { PrismaClient } from '../../../../generated/prisma/client'
import { NotFoundError } from '../../../../shared/errors/AppError';
import { ClienteDTO } from '../../application/dtos/ClienteDTO';
import { Cliente } from '../../domain/entities/Cliente';
import { IClienteRepository } from '../../domain/repositories/IClienteRepository';
const prisma = new PrismaClient()

export class PrismaClienteRepository implements IClienteRepository {
  async crearCliente(cliente: ClienteDTO): Promise<number> {
    const nuevoCliente = await prisma.clientes.create({
      data: {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        celular: cliente.celular,
      },
    });
    return nuevoCliente.id_cliente;
  }

  async obtenerClientes(): Promise<ClienteDTO[]> {
    const clientes = await prisma.clientes.findMany();
    return clientes.map(c => new Cliente(c.nombre, c.apellido, c.celular ?? '', c.id_cliente));
  }

  async obtenerClientePorId(id: number): Promise<ClienteDTO> {
    const cliente = await prisma.clientes.findUnique({ where: { id_cliente: id } });
    if (!cliente) throw new NotFoundError('Cliente no encontrado');
    return new Cliente(cliente.nombre, cliente.apellido, cliente.celular ?? '', cliente.id_cliente);
  }

  async actualizarCliente(id_cliente: number, cliente: ClienteDTO): Promise<number> {
    await prisma.clientes.update({
      where: { id_cliente },
      data: {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        celular: cliente.celular,
      },
    });
    return id_cliente;
  }

  async eliminarCliente(id: number): Promise<boolean> {
    const deleted = await prisma.clientes.delete({
      where: { id_cliente: id },
    });
    return !!deleted;
  }
}