import { Capitulosvistos } from "./Capitulosvistos";
import { Temporada } from "./Temporada";

export class Capitulo {
    id: number;
    nombre: String | undefined;
    sinopsis_capitulo: String | undefined;
    fecha_emision: Date | undefined;
    duracion: number | undefined;
    temporada: Temporada | undefined;
    id_file: number | undefined;
    vecesvistos: Array<Capitulosvistos> | undefined;
}