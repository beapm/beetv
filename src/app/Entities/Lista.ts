import { Contenidolista } from "./Contenidolista";
import { Usuario } from "./Usuario";

export class Lista {
    id: number | undefined;
    nombre: String | undefined;
    usuario: Usuario | undefined;
    contenidos: Array<Contenidolista> | undefined;
}