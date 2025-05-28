export interface Ingreso {
    id_ingreso: string,
    venta: number,
    neto: number,
    bruto: number,
    fecha: Date,
    id_empresa: number;
}