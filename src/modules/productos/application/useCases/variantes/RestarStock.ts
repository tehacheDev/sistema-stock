// import { IProductoRepository } from '../../../domain/repositories/IProductoRepository';
// import logger from '../../../../../shared/utils/logger';

// export class RestarStock {
//   constructor(private readonly productoRepo: IProductoRepository) {}

//   async ejecutar(id: number, cantidad: number): Promise<void> {
//     const response = await this.productoRepo.restarStock(id, cantidad);
//     logger.info(`Stock actualizado => ${response}`);
//   }
// }