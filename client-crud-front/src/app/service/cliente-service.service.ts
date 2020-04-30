import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import {Observable} from "rxjs";

@Injectable()
export class ClienteService {

  private clientesUrl: string;

  constructor(private http: HttpClient) {
    this.clientesUrl = 'http://localhost:8080/clientes';
  }

  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl);
  }

  public save(cliente: Cliente) {
    return this.http.post<Cliente>(this.clientesUrl + '/salva', cliente);
  }

  public editar(id: number): any {
    return this.http.post<number>(this.clientesUrl + '/seleciona', id);
  }

  public delete(id: number) {
    return this.http.post<number>(this.clientesUrl + '/remove', id);
  }
}
