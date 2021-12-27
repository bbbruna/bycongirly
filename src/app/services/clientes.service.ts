import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { clientes } from 'src/app/model/clientes.model';

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ClientesService {

  public clienteAtt = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }


  public getAll(): Observable<clientes[]>{
    return this.http.get<clientes[]>('http://localhost:3000/clientes/');
  }

  public getById(id: number): Observable<clientes> {
    return this.http.get<clientes>('http://localhost:3000/clientes/'+id);
    
  }

  public adicionar(cliente: clientes): Observable<clientes>{  
    const clienteJSON = JSON.stringify(cliente);
    return this.http.post<clientes>('http://localhost:3000/clientes/', clienteJSON, httpOptions);
  }

  public update(cliente: clientes): Observable<clientes>{
    const id = cliente.id;
    const clienteJSON = JSON.stringify(cliente);

    return this.http.put<clientes>('http://localhost:3000/clientes/'+ id, clienteJSON, httpOptions);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/clientes/'+id);
  }



}
