import pool from '../../../../shared/database/connection';
import { Producto } from '../../domain/entities/Producto';
import { Variante } from '../../domain/entities/Variante';
import { IProductoRepository } from '../../domain/repositories/IProductoRepository';


export class PostgresProductoRepository implements IProductoRepository {

  async crearProductoConVariante(producto: Producto, variantes: Variante[]): Promise<number> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const query = `
        INSERT INTO productos (
          nombre, categoria, costo, precio_unitario
        ) VALUES ($1, $2, $3, $4)
        RETURNING id_producto
      `;
      const values = [
        producto.nombre,
        producto.categoria,
        producto.costo,
        producto.precio_unitario,
      ];

      const result = await pool.query(query, values);
      const id_producto = result.rows[0].id_producto;
      variantes = variantes.map((variante) => ({
        ...variante,
        id_producto,
      }));

      for (const variante of variantes) {
        const queryVariante = `
          INSERT INTO producto_variantes (
            id_producto, talle, stock_actual, color
          ) VALUES ($1, $2, $3, $4)
        `;
        const valuesVariante = [
          variante.id_producto,
          variante.talle,
          variante.stock_actual,
          variante.color,
        ];

        await pool.query(queryVariante, valuesVariante);
      }

      await client.query('COMMIT');
      return id_producto;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  async listarProductos(): Promise<Producto[]> {
    const result = await pool.query('SELECT * FROM productos');
    return result.rows.map(Producto.fromRow);
  }

  async listarVariantePorId(id: number): Promise<Variante[]> {
    const result = await pool.query('SELECT * FROM producto_variantes WHERE id_producto = $1', [id]);
    return result.rows.map(Variante.fromRow);
  }

  async actualizarProducto(id: number, producto: Producto): Promise<number> {
    const query = `
      UPDATE productos
      SET nombre = $1, categoria = $2, costo = $3, precio_unitario = $4
      WHERE id_producto = $5
    `;
    const values = [
      producto.nombre,
      producto.categoria,
      producto.costo,
      producto.precio_unitario,
      id,
    ];

    const result = await pool.query(query, values);
    // debe retornar el id del producto actualizado
    return (result.rowCount ?? 0) > 0 ? id : -1;
  }

  async actualizarVariante(id: number, variante: Variante): Promise<number> {
    const query = `
      UPDATE producto_variantes
      SET talle = $1, stock_actual = $2, color = $3
      WHERE id_variante = $4
    `;
    const values = [
      variante.talle,
      variante.stock_actual,
      variante.color,
      id,
    ];

    const result = await pool.query(query, values);
    return (result.rowCount ?? 0) > 0 ? id : -1;
  }

  async eliminarProductoConVariantes(id: number): Promise<boolean> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const query = `
        DELETE FROM productos
        WHERE id_producto = $1
      `;
      const values = [id];

      await pool.query(query, values);

      const queryVariante = `
        DELETE FROM producto_variantes
        WHERE id_producto = $1
      `;
      await pool.query(queryVariante, values);

      await client.query('COMMIT');
      return true;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  async eliminarVariante(id: number): Promise<boolean> {
    const query = `
      DELETE FROM producto_variantes
      WHERE id_variante = $1
    `;
    const values = [id];

    const result = await pool.query(query, values);
    return (result.rowCount ?? 0) > 0;
  }
}