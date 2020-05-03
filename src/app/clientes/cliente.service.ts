import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

//logica de NEGOCIO, MODELO
@Injectable()
export class ClienteService {
private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  constructor( private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return CLIENTES;
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[] )
    );

  }
}
