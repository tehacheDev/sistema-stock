import pool from '../../../../shared/database/connection';
import logger from '../../../../shared/utils/logger';
import { ClienteDTO } from '../../application/dtos/ClienteDTO';
import { Cliente } from '../../domain/entities/Cliente';
import { IClienteRepository } from '../../domain/repositories/IClienteRepository';

export class PostgresClienteRepository implements IClienteRepository {
    async crearCliente(cliente: ClienteDTO): Promise<number> {
        const query = `
        INSERT INTO clientes (nombre, apellido, celular)
        VALUES ($1, $2, $3)
        RETURNING id_cliente
        `;
        const values = [cliente.nombre, cliente.apellido, cliente.celular];

        const result = await pool.query(query, values);
        const id_cliente = result.rows[0].id_cliente;
        return id_cliente;
    }

    async obtenerClientes(): Promise<ClienteDTO[]> {
        const result = await pool.query('SELECT * FROM clientes');
        return result.rows.map((row) => new Cliente(
            row.nombre,
            row.apellido,
            row.celular,
            row.id_cliente
        ));
    }

    async obtenerClientePorId(id: number): Promise<ClienteDTO> {
        const result = await pool.query('SELECT * FROM clientes WHERE id_cliente = $1', [id]);
        const row = result.rows[0];
    
        return new Cliente(
            row.nombre,
            row.apellido,
            row.celular,
            row.id_cliente
        );
    }

    async actualizarCliente(id_cliente: number, cliente: ClienteDTO): Promise<number> {
        const query = `
            UPDATE clientes
            SET nombre = $1, apellido = $2, celular = $3
            WHERE id_cliente = $4
            RETURNING id_cliente
        `;
        const values = [cliente.nombre, cliente.apellido, cliente.celular, id_cliente];
    
        await pool.query(query, values);

        return id_cliente;
    }

    async eliminarCliente(id: number): Promise<boolean> {
        const query = 'DELETE FROM clientes WHERE id_cliente = $1';
        const result = await pool.query(query, [id]);
        return (result.rowCount ?? 0) > 0;
    }
}