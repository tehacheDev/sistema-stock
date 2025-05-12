import pool from '../../../../shared/database/connection';
import logger from '../../../../shared/utils/logger';
import { Producto } from '../../domain/entities/Producto';
import { ProductoVariante } from '../../domain/entities/ProductoVariante';
import { ProductoRepository } from '../../domain/repositories/ProductoRepository';


export class PostgresProductoRepository implements ProductoRepository {

  async crearProducto(producto: Producto): Promise<Producto> {
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
    producto.id_producto = result.rows[0].id_producto;

    return producto;
  }

  async obtenerProductos(): Promise<Producto[]> {
    const result = await pool.query('SELECT * FROM productos');
    return result.rows.map((row) => new Producto(
      row.nombre,
      row.categoria,
      row.costo,
      row.precio_unitario,
      row.id_producto
    ));
  }

  async actualizarProducto(id_producto: number, producto: Producto): Promise<Producto> {
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
      id_producto,
    ];

    await pool.query(query, values);

    return producto;
  }

  async eliminarProducto(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM productos WHERE id_producto = $1', [id]);
    return (result.rowCount ?? 0) > 0;
  }

}