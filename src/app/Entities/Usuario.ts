import { Capitulosvistos } from "./Capitulosvistos";
import { Lista } from "./Lista";
import { Puntuacionserie } from "./Puntuacionserie";
import { Tipousuario } from "./Tipousuario";

export class Usuario {
    id: number | undefined;
    nombre: String | undefined;
    apellido1: String | undefined;
    apellido2: String | undefined;
    email: String | undefined;
    login: String | undefined;
    password: String | undefined;
    validado: boolean | undefined;
    activo: boolean | undefined;
    tipousuario: Tipousuario | undefined;
    listas: Array<Lista> | undefined;
    puntuaciones: Array<Puntuacionserie> | undefined;
    capitulosvistos: Array<Capitulosvistos> | undefined;
}