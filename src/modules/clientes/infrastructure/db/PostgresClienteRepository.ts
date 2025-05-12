import pool from '../../../../shared/database/connection';
import { Cliente } from '../../domain/entities/Cliente';
import { ClienteRepository } from '../../domain/repositories/ClienteRepository';

export class PostgresClienteRepository implements ClienteRepository {
    async crearCliente(cliente: Cliente): Promise<Cliente> {
        const query = `
        INSERT INTO clientes (nombre, apellido, celular)
        VALUES ($1, $2, $3)
        `;
        const values = [cliente.nombre, cliente.apellido, cliente.celular];

        await pool.query(query, values);

        return cliente;
    }

    async obtenerClientes(): Promise<Cliente[]> {
        const result = await pool.query('SELECT * FROM clientes');
        return result.rows.map((row) => new Cliente(
            row.nombre,
            row.apellido,
            row.celular,
            row.id_cliente
        ));
    }

    async obtenerClientePorId(id: number): Promise<Cliente | null> {
        const result = await pool.query('SELECT * FROM clientes WHERE id_cliente = $1', [id]);
        const row = result.rows[0];
        if (!row) return null;
    
        return new Cliente(
        row.nombre,
        row.apellido,
        row.celular,
        row.id_cliente
        );
    }

    async actualizarCliente(id_cliente: number, cliente: Cliente): Promise<Cliente> {
        const query = `
            UPDATE clientes
            SET nombre = $1, apellido = $2, celular = $3
            WHERE id_cliente = $4
        `;
        const values = [cliente.nombre, cliente.apellido, cliente.celular, id_cliente];
    
        await pool.query(query, values);
    
        return cliente;
    }

    async eliminarCliente(id: number): Promise<void> {
        const query = 'DELETE FROM clientes WHERE id_cliente = $1';
        await pool.query(query, [id]);
    }
}