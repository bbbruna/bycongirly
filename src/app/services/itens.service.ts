import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from './../model/item.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  public itensLista: Array<Item> = [];

  constructor(private http: HttpClient) { }

  public pagina(pagina: number, limite: number){
    return this.http.get<Item>('http://localhost:3000/item?_page='+ pagina +'&_limit=' +limite, {
      observe: 'response'
    });
  }

  public getArray(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/item/');
  }

  public getId(id: number): Observable<Item> {
    return this.http.get<Item>('http://localhost:3000/item/'+id);
   }

  public adicionar(itens: Item): Observable<any>{

    itens.imagem = './../../assets/img/desenho1.jpg';
    itens.logo = "./assets/img/logo2.png";
    const itemJSON = JSON.stringify(itens);

    return this.http.post<Item>('http://localhost:3000/item/', itemJSON, httpOptions);
  }

  public atualizar(item: Item): Observable<any> {
    const id = item.id;
    const produtoJSON = JSON.stringify(item);
 
    return this.http.put(`http://localhost:3000/item/${id}`, produtoJSON, httpOptions);
   }

    public excluir(id: number){
      return this.http.delete('http://localhost:3000/item/'+id);  
  }

}

