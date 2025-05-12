export class Cliente {
    constructor(
        public nombre: string,
        public apellido: string,
        public celular: string,
        public idCliente?: number
    ) {}
  
    getNombreCompleto(): string {
      return `${this.nombre} ${this.apellido}`;
    }
}