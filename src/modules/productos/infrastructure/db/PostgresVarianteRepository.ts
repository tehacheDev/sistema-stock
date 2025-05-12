import pool from '../../../../shared/database/connection';
import { ProductoVariante } from '../../domain/entities/ProductoVariante';
import { VarianteRepository } from '../../domain/repositories/VarianteRepository';


export class PostgresVarianteRepository implements VarianteRepository {

  async guardarVariante(variante: ProductoVariante): Promise<ProductoVariante> {
    const query = `
      INSERT INTO producto_variantes (
        id_producto, talle, color, stock_actual
      ) VALUES ($1, $2, $3, $4)
    `;
    const values = [
      variante.id_producto,
      variante.talle,
      variante.color,
      variante.stock_actual
    ];
    await pool.query(query, values);
    return variante;
  }

  async obtenerVariantes(): Promise<ProductoVariante[]> {
    const result = await pool.query('SELECT * FROM producto_variantes');
    return result.rows.map((row) => new ProductoVariante(
        row.id_producto,
        row.talle,
        row.color,
        row.stock_actual,
        row.id_variante
    ));
  }

  async actualizarVariante(id_variante: number, variantes: ProductoVariante): Promise<ProductoVariante> {
    const query = `
      UPDATE producto_variantes
      SET talle = $1, color = $2, stock_actual = $3
      WHERE id_variante = $4
    `;
    const values = [
      variantes.talle,
      variantes.color,
      variantes.stock_actual,
      id_variante,
    ];

    await pool.query(query, values);

    return variantes;
  }

  async eliminarVariante(id: number): Promise<boolean> {
    const result = await pool.query('DELETE FROM producto_variantes WHERE id_variante = $1', [id]);
    return (result.rowCount ?? 0) > 0;
  }
}