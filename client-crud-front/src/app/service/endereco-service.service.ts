import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnderecoModel } from '../model/endereco-model';
import {Observable} from "rxjs";

@Injectable()
export class EnderecoService {

  private enderecosUrl: string;

  constructor(private http: HttpClient) {
    this.enderecosUrl = 'http://localhost:8080/enderecos';
  }

  public findAll(idCliente: number): Observable<EnderecoModel[]> {
    return this.http.get<EnderecoModel[]>( this.enderecosUrl + '/listar/' + idCliente);
  }

  public save(endereco: EnderecoModel) {
    return this.http.post<EnderecoModel>(this.enderecosUrl + '/salva', endereco);
  }

  public editar(id: number): any {
    return this.http.post<number>(this.enderecosUrl + '/seleciona', id);
  }

  public delete(id: number) {
    return this.http.post<number>(this.enderecosUrl + '/remove', id);
  }
}
