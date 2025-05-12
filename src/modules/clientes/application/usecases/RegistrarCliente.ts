import { Cliente } from "../../domain/entities/Cliente";
import { ClienteRepository } from "../../domain/repositories/ClienteRepository";

interface InputDTO {
    nombre: string;
    apellido: string;
    celular: string;
}

export class RegistrarCliente {
    constructor(private readonly clienteRepo: ClienteRepository) {}

    async registrar(data: InputDTO): Promise<void> {
        const cliente = new Cliente(
            data.nombre,
            data.apellido,
            data.celular
        );

        await this.clienteRepo.crearCliente(cliente);
    }
}
