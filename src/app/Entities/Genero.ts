import { Serie } from "./Serie";

export class Genero {
    id!: number;
    nombre: String | undefined;
    series: Array<Serie> | undefined;
}