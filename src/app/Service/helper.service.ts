import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HelperService {
  private message = new BehaviorSubject<number>(null);
  public customMessage = this.message.asObservable();

  private usuario = new BehaviorSubject<String>(null);
  public customMessageUsuario = this.usuario.asObservable();

  private usuarioID = new BehaviorSubject<number>(null);
  public customMessageUsuarioID = this.usuarioID.asObservable();

  private nombreSerie = new BehaviorSubject<String>(null);
  public customMessageBusqueda = this.nombreSerie.asObservable();

  constructor() {}

  public changeMessage(msg: number): void {
    this.message.next(msg);
  }

  public changeUsuario(msg: String): void {
    this.usuario.next(msg);
    console.log("helper2 ",msg);
  }

  public changeUsuarioID(msg: number): void {
    this.usuarioID.next(msg);
    console.log("helper3 ",msg);
  }

  public changeBusqueda(msg: String): void {
    this.nombreSerie.next(msg);
    console.log("helper busqueda ", msg);
  }
}