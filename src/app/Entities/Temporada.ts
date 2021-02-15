import { Capitulo } from "./Capitulo";
import { Serie } from "./Serie";

export class Temporada {
    id: number;
    descripcion: String | undefined;
    serie: Serie | undefined;
    fecha_inicio: Date | undefined;
    fecha_fin: Date | undefined;
    id_file: number | undefined;
    capitulos:  Array<Capitulo> | undefined;
}