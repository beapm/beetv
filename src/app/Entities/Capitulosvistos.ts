import { Usuario } from "./Usuario";
import { Capitulo } from "./Capitulo";

export class Capitulosvistos {
    id: number | undefined;
    usuario: Usuario | undefined;
    capitulo: Capitulo | undefined;
    visto: boolean | undefined;
}