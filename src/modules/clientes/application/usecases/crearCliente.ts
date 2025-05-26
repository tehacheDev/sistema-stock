import { Cliente } from "../../domain/entities/Cliente";
import { ClienteDTO } from "../dtos/ClienteDTO";
import { IClienteRepository } from "../../domain/repositories/IClienteRepository";

export class CrearCliente {
    constructor(private readonly clienteRepo: IClienteRepository) {}

    async ejecutar(data: ClienteDTO): Promise<number> {
        const cliente = new Cliente(
            data.nombre,
            data.apellido,
            data.celular
        );

        const result = await this.clienteRepo.crearCliente(cliente);
        return result;
    }
}
