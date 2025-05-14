export class Cliente {
    constructor(
        public nombre: string,
        public apellido: string,
        public celular: string,
        public id_cliente?: number
    ) {}
  }