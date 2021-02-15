import { Genero } from "./Genero";
import { Temporada } from "./Temporada";

export class Serie {
    id: number;
    nombre: String | undefined;
    sinopsis_serie: String | undefined;
    idioma: String | undefined;
    duracion_media: number | undefined;
    fecha_inicio: Date | undefined;
    fecha_fin: Date | undefined;
    id_file: number | undefined;
    genero: Genero;
    temporadas: Array<Temporada> | undefined;

}